package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.ForumTopicData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;

public interface ForumService {
    List<ForumData> getForuns(Long idUser, Integer page, Integer size);
    List<QuestionData> getQuestions(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size);
    List<ForumTopicData> getTopics(Long idUser);
    Return createForum(Long idUser, RegisterForumData data);
    Return createQuestion(Long idUser, RegisterQuestionData data);
}
