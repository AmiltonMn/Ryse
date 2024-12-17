package com.example.demo.DTO.FeedbackDTO;

public record CreateFeedback(
    Long idUserSender,
    Long idUserReceiver,
    Long idGroup,
    String text,
    Boolean privacity
    ) {
    
}
