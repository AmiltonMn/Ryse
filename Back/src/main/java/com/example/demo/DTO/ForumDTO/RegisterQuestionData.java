package com.example.demo.DTO.ForumDTO;

public record RegisterQuestionData(
    String title,
    String text,
    Long idForum,
    Long idTopic
) {}
