package com.example.demo.DTO.ForumDTO;

public record ForumData(
    Long idForum,
    String username,
    String date,
    String title,
    Boolean isOwner
) {}
