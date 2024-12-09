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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;
import com.example.demo.Services.ForumService;

@RestController
@RequestMapping("/forum")
public class ForumController {

    @Autowired
    ForumService forumService;

    @GetMapping("/{idForum}/questions")
    ResponseEntity<List<QuestionData>> getForum(
        @RequestAttribute("token") Token token,
        @PathVariable Long idForum,
        @RequestParam(name = "topic", required = false) Long topic, 
        @RequestParam(name = "page") Integer page, 
        @RequestParam(name = "size") Integer size
        )
    {

        List<QuestionData> response = forumService.getQuestions(token.getId(), idForum, topic, page, size);
            
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    ResponseEntity<Return> createForum(@RequestAttribute("token") Token token, @RequestBody RegisterForumData data){

        if(data.name().isEmpty())
        return new ResponseEntity<>(new Return("Please send a name", false), HttpStatus.BAD_REQUEST);
        
        Return response = forumService.createForum(token.getId(), data);

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

    }

    @PostMapping("/question") 
    ResponseEntity<Return> createQuestion(@RequestAttribute("token") Token token, @RequestBody RegisterQuestionData data){

        Return response = forumService.createQuestion(token.getId(), data);

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

    }
}
