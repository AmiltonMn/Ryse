package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.TopicDTO.RegisterTopicData;
import com.example.demo.DTO.TopicDTO.RegisterTopicReturn;
import com.example.demo.DTO.TopicDTO.TopicCreate;
import com.example.demo.DTO.TopicDTO.TopicDTO;
import com.example.demo.Services.TopicService;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    TopicService topicService;

    @GetMapping
    public ResponseEntity<List<TopicDTO>> GetTopics(
        @RequestParam(name = "page",defaultValue = "1") Integer page, 
        @RequestParam(name = "size",defaultValue = "5") Integer size) 
    {
        List<TopicDTO> response = topicService.getTopics(page, size);

        if(response.isEmpty())
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    
    @PostMapping
    public ResponseEntity<RegisterTopicReturn> Register(@RequestAttribute("token") Token token, @RequestBody RegisterTopicData data) {

        System.out.println(token);



        RegisterTopicReturn response = topicService.createTopic(new TopicCreate(data.name(), token.getId()));

        if(!response.result())
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
