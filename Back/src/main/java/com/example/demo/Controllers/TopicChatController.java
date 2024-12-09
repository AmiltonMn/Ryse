package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.TopicChatDTO.CreateChat;
import com.example.demo.DTO.TopicChatDTO.CreateChatInfo;
import com.example.demo.DTO.TopicChatDTO.CreateMessageInfo;
import com.example.demo.DTO.TopicChatDTO.TopicChatReturn;
import com.example.demo.Models.TopicChat;
import com.example.demo.Services.TopicChatServices;

@RestController
@RequestMapping("/topicChat")
public class TopicChatController {

    @Autowired
    TopicChatServices topicChatServices;

    @PostMapping
    public ResponseEntity<TopicChatReturn> createChat(@RequestAttribute("token") Token token, @RequestBody CreateChatInfo data) {

       return new ResponseEntity<>(topicChatServices.createTopicChat(new CreateChat(token.getId(), data.idTopic(), data.name())), HttpStatus.OK);
    }

    @PostMapping("/message")
    public ResponseEntity<TopicChatReturn> createMessage(@RequestAttribute("token") Token token, @RequestBody CreateMessageInfo data) {
        

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{idTopicChat}")
    public ResponseEntity<TopicChatReturn> deleteChat(@RequestBody String entity) {
        // TODO: process POST request

        return entity;
    }

    @PutMapping("/{idTopicChat}")
    public ResponseEntity<TopicChatReturn> updateNameChatTopic(@PathVariable Long id, @RequestBody String entity) {
        // TODO: process PUT request

        return entity;
    }

    @PutMapping("/message/{idTopicChat}")
    public ResponseEntity<TopicChatReturn> InativeMessage(@PathVariable Long id, @RequestBody String entity) {
        // TODO: process PUT request

        return entity;
    }

    @GetMapping
    public ResponseEntity<List<TopicChat>> getTopicChat(@RequestParam String param) {
        return topicChatServices.getTopicChats();
    }

    @GetMapping("/message/{idTopicChat}")
    public ResponseEntity<List<TopicChat>> getChatMessages(@PathVariable Long id) {
        return new String();
    }

}
