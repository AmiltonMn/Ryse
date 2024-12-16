package com.example.demo.DTO.TopicChatDTO;

public record CreateMessage(
    Long idUser,
    Long idChatTopic,
    String text
) {
    
}
