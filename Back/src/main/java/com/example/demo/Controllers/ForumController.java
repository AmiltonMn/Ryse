package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterForumReturn;
import com.example.demo.Services.ForumService;

@RestController
public class ForumController {

    @Autowired
    ForumService forumService;
    
    @PostMapping("/forum/create")
    ResponseEntity<RegisterForumReturn> createForum(@RequestAttribute("token") Token token,@RequestBody RegisterForumData data){

        if(data.name().isEmpty())
        return new ResponseEntity<>(new RegisterForumReturn("Please send a name", false), HttpStatus.BAD_REQUEST);
        
        RegisterForumReturn response = forumService.createForum(data.name(), token.getId());

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

    }
}
