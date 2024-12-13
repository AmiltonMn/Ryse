package com.example.demo.Implementations;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.FeedbackDTO.CreateFeedback;
import com.example.demo.DTO.FeedbackDTO.FeedbackGet;
import com.example.demo.DTO.FeedbackDTO.FeedbackReturn;
import com.example.demo.DTO.FeedbackDTO.UserInfoFeedback;
import com.example.demo.DTO.FeedbackDTO.returnGetFeedback;
import com.example.demo.Models.Feedback;
import com.example.demo.Models.Group;
import com.example.demo.Models.User;
import com.example.demo.Repositories.FeedbackRepository;
import com.example.demo.Repositories.GroupRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.FeedbackServices;

public class FeedbackImplementations implements FeedbackServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    GroupRepository groupRepo;

    @Autowired
    FeedbackRepository feedbackRepo;

    @Override
    public FeedbackReturn createFeedback(CreateFeedback data) {

        User userSender = userRepo.findById(data.idUserSender()).get();
        User userReceiver = userRepo.findById(data.idUserReceiver()).get();
        Group group = groupRepo.findById(data.idGroup()).get();

        if (data.text().isEmpty()) {
            return new FeedbackReturn("Please write something in your feedback", false);
        }

        Feedback newFeedback = new Feedback();
        newFeedback.setUserSender(userSender);
        newFeedback.setUserReceiver(userReceiver);
        newFeedback.setGroupEntity(group);
        newFeedback.setText(data.text());
        newFeedback.setPrivacity(data.privacity());

        feedbackRepo.save(newFeedback);
        return new FeedbackReturn("Created with sucess", true);
    }

    @Override
    public List<FeedbackGet> getFeedbackReceiver(Long idUser) {
        var FeedbacksReturn = feedbackRepo.getFeedbacksReceiver(idUser);
        List<FeedbackGet> listFeedbacks = new ArrayList<>();
        for (Feedback feedback : FeedbacksReturn) {
            listFeedbacks.add(new FeedbackGet(feedback.getText(), new UserInfoFeedback(feedback.getUserReceiver().getId(),feedback.getUserReceiver().getName(), feedback.getUserReceiver().getPhoto(),feedback.getUserReceiver().getName())));
        }

        if (listFeedbacks.isEmpty()) {
            return listFeedbacks;
        }

        return listFeedbacks;
    }

    @Override
    public List<FeedbackGet> getFeedbackSender(Long idUser) {
        var FeedbacksReturn = feedbackRepo.getFeedbacksSender(idUser);

        

        
        
        List<FeedbackGet> listFeedbacks = new ArrayList<>();
        for (Feedback feedback : FeedbacksReturn) {
            listFeedbacks.add(new FeedbackGet(feedback.getText(), new UserInfoFeedback(feedback.getUserSender().getId(),feedback.getUserSender().getName(), feedback.getUserSender().getPhoto(),feedback.getUserSender().getName())));
        }
        
        if (listFeedbacks.isEmpty()) {
            return listFeedbacks;
        }

        return listFeedbacks;
    }

}