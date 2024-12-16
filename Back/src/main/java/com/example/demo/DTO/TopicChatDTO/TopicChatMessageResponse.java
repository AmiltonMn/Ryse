package com.example.demo.DTO.TopicChatDTO;

import java.util.ArrayList;

public record TopicChatMessageResponse(
    ArrayList<TopicMessagesData> messages,
    String message,
    Boolean result
) {
    
}
