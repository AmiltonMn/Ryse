package com.example.demo.DTO.TopicChatDTO;

import com.example.demo.DTO.UserDTO.UserData;

public record GetTopicChats(
    String name,
    String date,
    UserData user
) {}
