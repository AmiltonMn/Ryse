package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;

public interface ForumService {
    List<ForumData> getForum(Long idUser, String query, Integer page, Integer size);
    Return createForum(Long idUser, RegisterForumData data);
    Return createQuestion(Long idUser, RegisterQuestionData data);
}
