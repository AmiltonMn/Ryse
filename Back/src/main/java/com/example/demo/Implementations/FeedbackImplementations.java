package com.example.demo.Implementations;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.FeedbackDTO.CreateFeedback;
import com.example.demo.DTO.FeedbackDTO.FeedbackGet;
import com.example.demo.DTO.FeedbackDTO.FeedbackReturn;
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
    public returnGetFeedback getFeedbackReceiver(Long idUser, Long idGroup) {
        var FeedbacksReturn = feedbackRepo.getFeedbacksReceiver( idUser, idGroup);
        List<FeedbackGet> listFeedbacks = new ArrayList<>();
        for (Feedback feedback : FeedbacksReturn) {
            listFeedbacks.add(new FeedbackGet(feedback.getText(), feedback.getUserSender()));
        }

        return new returnGetFeedback(listFeedbacks, new FeedbackReturn("get done with sucess", true));
    }

    @Override
    public returnGetFeedback getFeedbackSender(Long idUser, Long idGroup) {
        var FeedbacksReturn = feedbackRepo.getFeedbacksSender(idUser,idGroup);
        List<FeedbackGet> listFeedbacks = new ArrayList<>();
        for (Feedback feedback : FeedbacksReturn) {
            listFeedbacks.add(new FeedbackGet(feedback.getText(), feedback.getUserSender()));
        }

        return new returnGetFeedback(listFeedbacks, new FeedbackReturn("get done with sucess", true));
    }

}
