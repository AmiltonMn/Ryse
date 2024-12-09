package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;
import com.example.demo.Models.Forum;
import com.example.demo.Models.ForumTopic;
import com.example.demo.Models.Question;
import com.example.demo.Models.User;
import com.example.demo.Repositories.ForumRepository;
import com.example.demo.Repositories.ForumTopicRepository;
import com.example.demo.Repositories.QuestionRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.ForumService;

public class ForumImplementation implements ForumService{

    @Autowired
    UserRepository userRepo;

    @Autowired
    ForumRepository forumRepo;

    @Autowired
    ForumTopicRepository topicRepo;

    @Autowired
    QuestionRepository questionRepo;

    @Override
    public List<ForumData> getForuns(Long idUser, Integer page, Integer size) {

        List<Forum> foruns = forumRepo.findForumWithPagination((page -1) * size, size);

        List<ForumData> response = new ArrayList<>();

        for(Forum forum : foruns){
            response.add(new ForumData(
                forum.getIdForum(), 
                forum.getUser().getName(), 
                forum.getDate(), 
                forum.getName(), 
                forum.getUser().getId().equals(idUser)? true: false
            ));
        }

        return response;
    }

    @Override
    public List<QuestionData> getQuestions(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size) {

        List<Question> questions;

        if(id_topic == null)
            questions = questionRepo.findQuestionWithPagination((page -1) * size, size, id_forum);
        else
            questions = questionRepo.findQuestionWithPaginationTopic((page -1) * size, size, id_forum, id_topic);

        List<QuestionData> response = new ArrayList<>();

        for(Question question : questions){
            response.add(new QuestionData(
                question.getIdQuestion(), 
                question.getUser().getName(), 
                question.getTitle(), 
                question.getTopicForum().getName(), 
                question.getDate(), 
                question.getUser().getId().equals(idUser)? true : false
            ));
        }

        return response;
    }

    @Override
    public Return createForum(Long idUser, RegisterForumData data) {
        
        Optional<Forum> forum = forumRepo.findByName(data.name());

        if(forum.isPresent())
            return new Return("This name is already in use", false);

        Optional<User> user = userRepo.findById(idUser);

        Forum newForum = new Forum();

        newForum.setName(data.name());
        newForum.setDate(LocalDateTime.now().toString());
        newForum.setUser(user.get());

        forumRepo.save(newForum);

        return new Return("Forum created with sucess!", true);
    }

    @Override
    public Return createQuestion(Long idUser, RegisterQuestionData data) {

        Optional<Forum> forum = forumRepo.findById(data.idForum());

        if (!forum.isPresent())
            return new Return("This forum does not exist", false);

        Optional<ForumTopic> topic = topicRepo.findById(data.idTopic());

        if (!topic.isPresent())
            return new Return("This topic does not exist", false);

        Optional<User> user = userRepo.findById(idUser);
        
        Question newQuestion = new Question();

        newQuestion.setTitle(data.title());
        newQuestion.setText(data.text());
        newQuestion.setForum(forum.get());
        newQuestion.setTopicForum(topic.get());
        newQuestion.setUser(user.get());
        newQuestion.setDate(LocalDateTime.now().toString());

        questionRepo.save(newQuestion);
        
        return new Return("Question created with sucess", true);
    }
    
}
