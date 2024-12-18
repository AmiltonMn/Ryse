package com.example.demo.DTO.FeedbackDTO;

public record CreateFeedback(
    Long idUserReceiver,
    Long idGroup,
    String text,
    Boolean privacity
    ) {
    
}
