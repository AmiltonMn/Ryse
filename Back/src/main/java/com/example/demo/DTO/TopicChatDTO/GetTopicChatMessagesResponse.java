package com.example.demo.DTO.TopicChatDTO;

import java.util.ArrayList;


public record GetTopicChatMessagesResponse(
    ArrayList<TopicMessagesData> messages,
    String name,
    Boolean result
) {}
