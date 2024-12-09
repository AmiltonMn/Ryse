package com.example.demo.DTO.ForumDTO;

public record QuestionData(
    Long idQuestion,
    String user,
    String title,
    String topic,
    String date,
    Boolean isOwner
) {}
