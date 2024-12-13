package com.example.demo.DTO.IdeaDTO;

public record IdeaData(
    Long idUser,
    String userPhoto,
    String username,
    String title,
    String text,
    String date,
    Integer status
) {}
