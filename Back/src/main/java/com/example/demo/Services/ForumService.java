package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.ForumTopicData;
import com.example.demo.DTO.ForumDTO.ForumWithQuestionData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.QuestionWithAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;

public interface ForumService {
    List<ForumData> getForuns(Long idUser, String query, Integer page, Integer size);
    ForumWithQuestionData getForum(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size);
    List<QuestionData> getQuestions(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size);
    QuestionWithAnswerData getQuestion(Long idUser, Long idQuestion);
    List<ForumTopicData> getTopics(Long idUser);
    Return createForum(Long idUser, RegisterForumData data);
    Return createQuestion(Long idUser, Long idForum, RegisterQuestionData data);
    Return createAnswer(Long idUser, Long idQuestion, RegisterAnswerData data);
    Return likeAnswer(Long idUser, Long idAnswer);
}
