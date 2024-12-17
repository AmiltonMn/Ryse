package com.example.demo.DTO.ChatGroupDto;

public record MessageData(
    String text,
    String date,
    Boolean deleted,
    String username,
    String photo
) {}
