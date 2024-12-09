package com.example.demo.DTO.FeedbackDTO;

import java.util.List;

public record returnGetFeedback(
    List<FeedbackGet> Feedbacks,
    FeedbackReturn result
) {
    
}
