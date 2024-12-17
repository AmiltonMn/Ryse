package com.example.demo.DTO.FeedbackDTO;

public record FeedbackGet(
    String text,
    String userName,
    String userPhoto,
    Boolean privacity
) {}
