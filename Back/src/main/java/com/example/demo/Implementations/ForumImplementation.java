package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.ForumDTO.AnswerData;
import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.ForumTopicData;
import com.example.demo.DTO.ForumDTO.ForumWithQuestionData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.QuestionWithAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;
import com.example.demo.DTO.Token;
import com.example.demo.Models.Answer;
import com.example.demo.Models.Forum;
import com.example.demo.Models.ForumTopic;
import com.example.demo.Models.LikeAnswer;
import com.example.demo.Models.Question;
import com.example.demo.Models.User;
import com.example.demo.Repositories.AnswerRepository;
import com.example.demo.Repositories.ForumRepository;
import com.example.demo.Repositories.ForumTopicRepository;
import com.example.demo.Repositories.LikeAnswerRepository;
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

    @Autowired
    AnswerRepository answerRepo;

    @Autowired
    LikeAnswerRepository likeRepo;

    @Override
    public List<ForumData> getForuns(Long idUser, String query, Integer page, Integer size) {

        List<Object[]> foruns = forumRepo.findForumWithQueryAndSize(query, size, idUser);

        List<ForumData> response = new ArrayList<>();

        for(Object[] forum : foruns){
            response.add(new ForumData(
                (Long) forum[0], 
                (String) forum[1], 
                (String) forum[2],
                (String) forum[3],
                forum[4].equals(1),
                (Integer) forum[5]
            ));
        }

        return response;
    }

    @Override
    public ForumWithQuestionData getForum(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size) {

        Optional<Forum> opForum = forumRepo.findById(id_forum);

        if(!opForum.isPresent())
            return new ForumWithQuestionData(null, null);

        Forum forum = opForum.get();

        ForumData responseForum = new ForumData(
            forum.getIdForum(), 
            forum.getUser().getName(), 
            forum.getDate(), 
            forum.getName(), 
            forum.getUser().getId().equals(idUser), 
            forum.getQuestions().size());

        List<Question> questions = forum.getQuestions();

        List<QuestionData> responseQuestion = new ArrayList<>();
        
        var i = 0;

        for(Question question : questions){

            Long id_topic_question = question.getTopicForum().getidTopicForum();

            if ((id_topic_question.equals(id_topic) || id_topic == null) && i < size * page && i >= (page * size) - size) {
                responseQuestion.add(new QuestionData(
                    question.getIdQuestion(), 
                    question.getUser().getName(), 
                    question.getTitle(), 
                    question.getText(),
                    question.getTopicForum().getName(), 
                    question.getDate(), 
                    question.getUser().getId().equals(idUser),
                    question.getAnswers().size()
                    ));
            }

            i++;
        }

        ForumWithQuestionData response = new ForumWithQuestionData(responseForum, responseQuestion);

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
                question.getText(),
                question.getTopicForum().getName(), 
                question.getDate(), 
                question.getUser().getId().equals(idUser),
                question.getAnswers().size()
            ));
        }

        return response;
    }

    @Override
    public QuestionWithAnswerData getQuestion(Long idUser, Long idQuestion) {        
        Optional<Question> opQuestion = questionRepo.findById(idQuestion);

        if(!opQuestion.isPresent())
            return new QuestionWithAnswerData(null, null);

        Question question = opQuestion.get();

        QuestionData responseQuestion = new QuestionData(
            idQuestion, 
            question.getUser().getName(), 
            question.getTitle(), 
            question.getText(),
            question.getTopicForum().getName(), 
            question.getDate(), 
            question.getUser().getId().equals(idUser),
            question.getAnswers().size()
        );

        List<Answer> answers = question.getAnswers();

        List<AnswerData> responseAnswer = new ArrayList<>();

        for(Answer answer : answers){
            responseAnswer.add(new AnswerData(
                answer.getIdAnswer(),
                answer.getUser().getName(), 
                answer.getDate(), 
                answer.getText(), 
                answer.getLikes().size(),
                isLiked(answer, idUser),
                answer.getVerified(), 
                answer.getUser().getId().equals(idUser)? true: false
            ));
        }

        return new QuestionWithAnswerData(responseQuestion, responseAnswer);
    }

    @Override
    public List<ForumTopicData> getTopics(Long idUser){

        List<ForumTopic> topics = topicRepo.findAll();

        List<ForumTopicData> response = new ArrayList<>();

        for(ForumTopic topic : topics){
            response.add(new ForumTopicData(topic.getidTopicForum(), topic.getName()));
        }

        return response;
    }

    @Override
    public Return createForum(Long idUser, RegisterForumData data) {
        
        Optional<Forum> forum = forumRepo.findByName(data.name());

        if(forum.isPresent())
            return new Return("This name is already in use", null, false);

        Optional<User> user = userRepo.findById(idUser);

        Forum newForum = new Forum();

        newForum.setName(data.name());
        newForum.setDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/YYYY")).toString());
        newForum.setUser(user.get());

        forumRepo.save(newForum);

        return new Return("Forum created with sucess!", null, true);
    }

    @Override
    public Return createQuestion(Long idUser, Long idForum, RegisterQuestionData data) {

        Optional<Forum> forum = forumRepo.findById(idForum);

        if (!forum.isPresent())
            return new Return("This forum does not exist", null, false);

        Optional<ForumTopic> topic = topicRepo.findById(data.idTopic());

        if (!topic.isPresent())
            return new Return("This topic does not exist", null, false);

        Optional<User> user = userRepo.findById(idUser);
        
        Question newQuestion = new Question();

        newQuestion.setTitle(data.title());
        newQuestion.setText(data.text());
        newQuestion.setForum(forum.get());
        newQuestion.setTopicForum(topic.get());
        newQuestion.setUser(user.get());
        newQuestion.setDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/YYYY - HH:mm")).toString());

        questionRepo.save(newQuestion);
        
        return new Return("Question created with sucess", null, true);
    }

    @Override
    public Return createAnswer(Long idUser, Long idQuestion, RegisterAnswerData data) {
        
        Optional<Question> question = questionRepo.findById(idQuestion);

        if (!question.isPresent()) {
            return new Return("Question not found", null, false);
        }

        Optional<User> user = userRepo.findById(idUser);

        Answer newAnswer = new Answer();

        newAnswer.setUser(user.get());
        newAnswer.setQuestion(question.get());
        newAnswer.setDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/YYYY - HH:mm")).toString());
        newAnswer.setText(data.text());
        newAnswer.setVerified(false);

        answerRepo.save(newAnswer);

        return new Return("Answer created with sucess", null, true);
    }

    @Override
    public Return likeAnswer(Token token, Long idAnswer) {

        Optional<LikeAnswer> opLike = likeRepo.findByUserIdUserAndAnswerIdAnswer(token.getId(), idAnswer);

        if(opLike.isPresent()){
            likeRepo.deleteById(opLike.get().getIdLikeAnswer());

            if (token.getRole().equals("Instructor")) {
                answerRepo.unverifyAnswer(idAnswer);
            }

            return new Return("Like removed", null, true);
        }
        
        Optional<User> user = userRepo.findById(token.getId());

        if(!user.isPresent())
        return new Return("User not found", null, false);

        Optional<Answer> answer = answerRepo.findById(idAnswer);

        if(!answer.isPresent())
            return new Return("Answer not found", null, false);

        LikeAnswer newLike = new LikeAnswer();

        newLike.setAnswer(answer.get());
        newLike.setUser(user.get());

        likeRepo.save(newLike);

        if (token.getRole().equals("Instructor")) {
            answerRepo.verifyAnswer(idAnswer);
        }

        return new Return("Like added", null, true);
    }

    private Boolean isLiked(Answer answer, Long idUser) {

        Boolean result = false;

        List<LikeAnswer> likes =  answer.getLikes();

        for(LikeAnswer like : likes){
            if(like.getUser().getId() == idUser)
                result = true;
        }

        return result;
    }
    
}
