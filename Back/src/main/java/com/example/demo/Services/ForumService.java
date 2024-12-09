package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;

public interface ForumService {
    List<QuestionData> getQuestions(Long idUser, Long id_forum, Long id_topic, Integer page, Integer size);
    Return createForum(Long idUser, RegisterForumData data);
    Return createQuestion(Long idUser, RegisterQuestionData data);
}
