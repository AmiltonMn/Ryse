package com.example.demo.DTO.ForumDTO;

public record AnswerData(
    String user,
    String date,
    String text,
    Integer likes,
    Boolean verified,
    Boolean isOwner
) {}
