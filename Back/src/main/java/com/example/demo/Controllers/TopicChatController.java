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
import com.example.demo.DTO.TopicChatDTO.CreateMessage;
import com.example.demo.DTO.TopicChatDTO.CreateMessageInfo;
import com.example.demo.DTO.TopicChatDTO.GetTopicChatMessagesResponse;
import com.example.demo.DTO.TopicChatDTO.GetTopicChats;
import com.example.demo.DTO.TopicChatDTO.TopicChatMessageResponse;
import com.example.demo.DTO.TopicChatDTO.TopicChatReturn;
import com.example.demo.DTO.TopicChatDTO.TopicChatUpdate;
import com.example.demo.Services.TopicChatServices;

@RestController
@RequestMapping("/topicChat")
public class TopicChatController {

    @Autowired
    TopicChatServices topicChatServices;

    @PostMapping
    public ResponseEntity<TopicChatReturn> createChat(@RequestAttribute("token") Token token,
            @RequestBody CreateChatInfo data) {

        return new ResponseEntity<>(
                topicChatServices.createTopicChat(new CreateChat(token.getId(), data.idTopic(), data.name())),
                HttpStatus.OK);
    }

    @PostMapping("/message")
    public ResponseEntity<TopicChatMessageResponse> createMessage(@RequestAttribute("token") Token token,
            @RequestBody CreateMessageInfo data) {

        CreateMessage info = new CreateMessage(token.getId(), data.idChatTopic(), data.text());
        TopicChatMessageResponse response = topicChatServices.createTopicChatMessage(info);
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{idTopicChat}")
    public ResponseEntity<TopicChatReturn> deleteChat(@RequestAttribute("token") Token token,
            @PathVariable Long idTopicChat) {
        var response = topicChatServices.deleteTopicChat(idTopicChat, token.getId());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/{idTopicChat}")
    public ResponseEntity<TopicChatReturn> updateNameChatTopic(@RequestAttribute("token") Token token,
            @PathVariable Long idTopicChat, @RequestParam(value = "newName", required = true) String newName) {
        TopicChatUpdate info = new TopicChatUpdate(token.getId(), idTopicChat, newName);
        var response = topicChatServices.updateNameChatTopic(info);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/message/{idTopicChatMessage}")
    public ResponseEntity<TopicChatMessageResponse> InativeMessage(@RequestAttribute("token") Token token, @PathVariable Long idTopicChatMessage) {
        var response = topicChatServices.inativeMessageTopicChat(idTopicChatMessage, token.getId());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{idTopic}")
    public ResponseEntity<List<GetTopicChats>> getTopicChat(@PathVariable Long idTopic) {
        return new ResponseEntity<>(topicChatServices.getTopicChats(idTopic), HttpStatus.OK);
    }

    @GetMapping("/message/{idTopicChat}")
    public ResponseEntity<GetTopicChatMessagesResponse> getChatMessages(@RequestAttribute("token") Token token, @PathVariable Long idTopicChat) {
        return new ResponseEntity<>(topicChatServices.getTopicMessage(token.getId(), idTopicChat), HttpStatus.OK);
    }

}
