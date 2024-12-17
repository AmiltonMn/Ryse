package com.example.demo.DTO.ChatGroupDto;

import java.util.ArrayList;

public record NewMessageResponse(
    ArrayList<MessagesData> messages,
    String resultMessage,
    Boolean result
) {}
