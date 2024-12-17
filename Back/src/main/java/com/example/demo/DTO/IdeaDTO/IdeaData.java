package com.example.demo.DTO.IdeaDTO;

public record IdeaData(
    Long idIdea,
    Long idUser,
    String userPhoto,
    String username,
    String title,
    String text,
    String date,
    Integer status,
    Integer likes,
    Boolean liked
) {}
