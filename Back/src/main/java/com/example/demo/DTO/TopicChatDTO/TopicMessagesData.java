package com.example.demo.DTO.TopicChatDTO;

import com.example.demo.DTO.UserDTO.UserData;

public record TopicMessagesData(
    String text,
    String date,
    Boolean deleted,
    UserData user
) {}
