package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.ForumDTO.AnswerData;
import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.ForumTopicData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.QuestionWithAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;
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

public class ForumImplementation implements ForumService {

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
    public List<ForumData> getForuns(Long idUser, Integer page, Integer size) {

        List<Forum> foruns = forumRepo.findForumWithPagination((page - 1) * size, size);

        List<ForumData> response = new ArrayList<>();

        for (Forum forum : foruns) {
            response.add(new ForumData(
                    forum.getIdForum(),
                    forum.getUser().getName(),
                    forum.getDate(),
                    forum.getName(),
                    forum.getUser().getId().equals(idUser) ? true : false));
        }

        return response;
    }

    @Override
    public List<QuestionData> getQuestions(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size) {

        List<Question> questions;

        if (id_topic == null)
            questions = questionRepo.findQuestionWithPagination((page - 1) * size, size, id_forum);
        else
            questions = questionRepo.findQuestionWithPaginationTopic((page - 1) * size, size, id_forum, id_topic);

        List<QuestionData> response = new ArrayList<>();

        for (Question question : questions) {
            response.add(new QuestionData(
                    question.getIdQuestion(),
                    question.getUser().getName(),
                    question.getTitle(),
                    question.getTopicForum().getName(),
                    question.getDate(),
                    question.getUser().getId().equals(idUser) ? true : false));
        }

        return response;
    }

    @Override
    public List<ForumTopicData> getTopics(Long idUser) {

        List<ForumTopic> topics = topicRepo.findAll();

        List<ForumTopicData> response = new ArrayList<>();

        for (ForumTopic topic : topics) {
            response.add(new ForumTopicData(topic.getidTopicForum(), topic.getName()));
        }

        return response;
    }

    @Override
    public Return createForum(Long idUser, RegisterForumData data) {

        Optional<Forum> forum = forumRepo.findByName(data.name());

        if (forum.isPresent())
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
    public Return createQuestion(Long idUser, Long idForum, RegisterQuestionData data) {

        Optional<Forum> forum = forumRepo.findById(idForum);

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

    @Override
    public Return createAnswer(Long idUser, Long idQuestion, RegisterAnswerData data) {

        Optional<Question> question = questionRepo.findById(idQuestion);

        if (!question.isPresent()) {
            return new Return("Question not found", false);
        }

        Optional<User> user = userRepo.findById(idUser);

        Answer newAnswer = new Answer();

        newAnswer.setUser(user.get());
        newAnswer.setQuestion(question.get());
        newAnswer.setDate(LocalDateTime.now().toString());
        newAnswer.setText(data.text());

        answerRepo.save(newAnswer);

        return new Return("Answer created with sucess", true);
    }

    @Override
    public QuestionWithAnswerData getQuestion(Long idUser, Long idQuestion) {

        Optional<Question> opQuestion = questionRepo.findById(idQuestion);

        if (!opQuestion.isPresent())
            return new QuestionWithAnswerData(null, null);

        Question question = opQuestion.get();

        QuestionData responseQuestion = new QuestionData(
                idQuestion,
                question.getUser().getName(),
                question.getTitle(),
                question.getTopicForum().getName(),
                question.getDate(),
                question.getUser().getId().equals(idUser) ? true : false);

        List<Answer> answers = question.getAnswers();

        List<AnswerData> responseAnswer = new ArrayList<>();

        for (Answer answer : answers) {
            responseAnswer.add(new AnswerData(
                    answer.getUser().getName(),
                    answer.getDate(),
                    answer.getText(),
                    1,
                    false,
                    answer.getUser().getId().equals(idUser) ? true : false));
        }

        return new QuestionWithAnswerData(responseQuestion, responseAnswer);
    }

    @Override
    public Return likeAnswer(Long idUser, Long idAnswer) {

        Optional<LikeAnswer> opLike = likeRepo.findByUserIdUserAndAnswerIdAnswer(idUser, idAnswer);

        if (opLike.isPresent()) {
            userRepo.deleteById(opLike.get().getIdLikeAnswer());

            return new Return("Like removed", true);
        }

        Optional<User> user = userRepo.findById(idUser);

        if (!user.isPresent())
            return new Return("User not found", false);

        Optional<Answer> answer = answerRepo.findById(idAnswer);

        if (!answer.isPresent())
            return new Return("Answer not found", false);

        LikeAnswer newLike = new LikeAnswer();

        newLike.setAnswer(answer.get());
        newLike.setUser(user.get());

        likeRepo.save(newLike);

        return new Return("Like added", true);
    }

}
