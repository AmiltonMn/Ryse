package com.example.demo.DTO.ChatGroupDto;

import java.util.ArrayList;

public record DeleteChatResponse(
    String message,
    Boolean result,
    ArrayList<ChatsData> chats
) {}
