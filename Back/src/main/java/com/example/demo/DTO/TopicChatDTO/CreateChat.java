package com.example.demo.DTO.TopicChatDTO;

public record CreateChat(
    Long idUser,
    Long idTopic,
    String name
) {
    
}
