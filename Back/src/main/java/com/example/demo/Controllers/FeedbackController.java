package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.FeedbackDTO.CreateFeedback;
import com.example.demo.DTO.FeedbackDTO.FeedbackGet;
import com.example.demo.DTO.FeedbackDTO.FeedbackReturn;
import com.example.demo.DTO.FeedbackDTO.returnGetFeedback;
import com.example.demo.DTO.Token;
import com.example.demo.Services.FeedbackServices;



@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    
    @Autowired
    FeedbackServices feedbackServices;

    @PostMapping
    public ResponseEntity<FeedbackReturn> postFeedback(@RequestBody CreateFeedback data) {
        var response = feedbackServices.createFeedback(data);
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/receiver")
    public ResponseEntity<List<FeedbackGet>> feedbackReceiver(@RequestAttribute("token") Token token) {
        var response = feedbackServices.getFeedbackReceiver(token.getId());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/sender")
    public ResponseEntity<List<FeedbackGet>> feedbackSender(@RequestAttribute("token") Token token) {
        var response = feedbackServices.getFeedbackSender(token.getId());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
