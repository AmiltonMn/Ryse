package com.example.demo.Services;

import com.example.demo.DTO.FeedbackDTO.CreateFeedback;
import com.example.demo.DTO.FeedbackDTO.FeedbackReturn;
import com.example.demo.DTO.FeedbackDTO.returnGetFeedback;

public interface FeedbackServices {
    FeedbackReturn createFeedback(CreateFeedback data);
    returnGetFeedback getFeedbackReceiver(Long idUser, Long idGroup);
    returnGetFeedback getFeedbackSender(Long idUser, Long idGroup);
}
