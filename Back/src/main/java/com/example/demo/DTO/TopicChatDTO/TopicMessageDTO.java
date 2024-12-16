package com.example.demo.DTO.TopicChatDTO;

import org.apache.catalina.User;

public record TopicMessageDTO(
    String text,
    User user,
    Boolean delete,
    String date
) {
    
}
