package com.example.demo.DTO.ChatGroupDto;

import java.util.ArrayList;

public record GetAllChatsResponse(
    ArrayList<ChatsData> chatGroupList,
    String message, 
    Boolean result
) {}
