package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.ForumDTO.ForumData;
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
    public List<ForumData> getForum(Long idUser, String query, Integer page, Integer size) {

        forumRepo.findForumWithPagination((page -1) * size, size, idUser);
        
        List<ForumData> response = new ArrayList<>();

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
