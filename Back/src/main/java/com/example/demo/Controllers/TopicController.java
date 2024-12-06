package com.example.demo.Controllers;

import java.time.Instant;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.Topic.RegisterTopicData;
import com.example.demo.DTO.Topic.RegisterTopicReturn;
import com.example.demo.DTO.Topic.TopicDTO;
import com.example.demo.Services.TopicService;

@RestController
public class TopicController {

    @Autowired
    TopicService topicService;

    @GetMapping("/topic")
    public ResponseEntity<List<TopicDTO>> GetTopics(
        @RequestParam(name = "page") Integer page, 
        @RequestParam(name = "size") Integer size) 
    {
        List<TopicDTO> response = topicService.getTopics(page, size);

        if(response.isEmpty())
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    
    @PostMapping("/topic")
    public ResponseEntity<RegisterTopicReturn> Register(@RequestAttribute("token") Token token, @RequestBody RegisterTopicData data) {

        System.out.println(token);

        RegisterTopicReturn response = topicService.createTopic(new TopicDTO(data.name(), Date.from(Instant.now()), token.getId()));

        if(!response.result())
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
