package com.example.demo.Services;

import com.example.demo.DTO.ForumDTO.RegisterForumReturn;

public interface ForumService {
    String getForum(String query, Integer page, Integer size);
    RegisterForumReturn createForum(String forumName, Long idUser);
}
