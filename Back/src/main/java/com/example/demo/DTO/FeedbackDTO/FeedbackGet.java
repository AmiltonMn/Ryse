package com.example.demo.DTO.FeedbackDTO;

import com.example.demo.Models.User;

public record FeedbackGet(
    String text,
    User user
) {
    
}
