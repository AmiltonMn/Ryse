package com.example.demo.DTO.ChatGroupDto;

import java.util.ArrayList;

public record NewChatGroupResponse(
    String message,
    ArrayList<ChatsData> chats
) {}
