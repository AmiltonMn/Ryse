package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.FeedbackDTO.CreateFeedback;
import com.example.demo.DTO.FeedbackDTO.FeedbackReturn;
import com.example.demo.DTO.FeedbackDTO.returnGetFeedback;
import com.example.demo.Services.FeedbackServices;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



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

    @GetMapping("/receiver/{idGroup}")
    public ResponseEntity<returnGetFeedback> feedbackReceiver(@RequestAttribute("token") Token token,@PathVariable Long idGroup) {
        var response = feedbackServices.getFeedbackReceiver(token.getId(), idGroup);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/sender/{idGroup}")
    public ResponseEntity<returnGetFeedback> feedbackSender(@RequestAttribute("token") Token token,@PathVariable Long idGroup) {
        var response = feedbackServices.getFeedbackSender(token.getId(), idGroup);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    
    
}
