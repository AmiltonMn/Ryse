package com.example.demo.DTO.ChatGroupDto;

import java.util.ArrayList;

public record GetAllMessagesResponse(
    ArrayList<MessagesData> messages,
    String resultMessage,
    Boolean result
) {}
