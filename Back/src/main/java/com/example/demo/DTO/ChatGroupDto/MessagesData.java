package com.example.demo.DTO.ChatGroupDto;

public record MessagesData(
    Long userId,
    String userName,
    String userPhoto,
    Long IdGroupMessage,
    String text,
    String date,
    Boolean deleted,
    Long idChatGroup,
    String chatGroupName
) {}
