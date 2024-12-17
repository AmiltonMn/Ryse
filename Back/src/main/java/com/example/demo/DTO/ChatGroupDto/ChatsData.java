package com.example.demo.DTO.ChatGroupDto;

public record ChatsData(
    Long chatId,
    String chatName,
    String chatDate,
    Long idChatOwner,
    String userName,
    String userState,
    Long idGroup,
    String groupName
) {}
