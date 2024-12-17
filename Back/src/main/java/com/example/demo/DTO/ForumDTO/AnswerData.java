package com.example.demo.DTO.ForumDTO;

public record AnswerData(
    Long idAnswer,
    String user,
    String date,
    String text,
    Integer likes,
    Boolean liked,
    Boolean verified,
    Boolean isOwner
) {}
