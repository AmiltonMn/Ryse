package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.FeedbackDTO.CreateFeedback;
import com.example.demo.DTO.FeedbackDTO.FeedbackGet;
import com.example.demo.DTO.FeedbackDTO.FeedbackReturn;

public interface FeedbackServices {
    FeedbackReturn createFeedback(CreateFeedback data);
    List<FeedbackGet> getFeedbackReceiver(Long idUser);
    List<FeedbackGet> getFeedbackSender(Long idUser);
}
