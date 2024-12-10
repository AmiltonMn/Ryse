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
import com.example.demo.DTO.ForumDTO.ForumTopicData;
import com.example.demo.DTO.ForumDTO.QuestionData;
import com.example.demo.DTO.ForumDTO.QuestionWithAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterAnswerData;
import com.example.demo.DTO.ForumDTO.RegisterForumData;
import com.example.demo.DTO.ForumDTO.RegisterQuestionData;
import com.example.demo.DTO.Return;
import com.example.demo.Services.ForumService;

@RestController
@RequestMapping("/forum")
public class ForumController {

    @Autowired
    ForumService forumService;

    @GetMapping
    public ResponseEntity<List<ForumData>> getForuns(
            @RequestAttribute("token") Token token,
            @RequestParam(name = "page", defaultValue = "1") Integer page,
            @RequestParam(name = "size", defaultValue = "5") Integer size) {
        List<ForumData> response = forumService.getForuns(token.getId(), page, size);

        if (response.isEmpty())
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{idForum}/questions")
    public ResponseEntity<List<QuestionData>> getQuestions(
            @RequestAttribute("token") Token token,
            @PathVariable Long idForum,
            @RequestParam(name = "topic", required = false) Long topic,
            @RequestParam(name = "page", defaultValue = "1") Integer page,
            @RequestParam(name = "size", defaultValue = "5") Integer size) {
        List<QuestionData> response = forumService.getQuestions(token.getId(), idForum, topic, page, size);

        if (response.isEmpty())
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/topics")
    public ResponseEntity<List<ForumTopicData>> getTopics(@RequestAttribute("token") Token token) {

        List<ForumTopicData> response = forumService.getTopics(token.getId());

        if (response.isEmpty())
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("question/{idQuestion}")
    public ResponseEntity<QuestionWithAnswerData> getAnswer(@RequestAttribute("token") Token token,
            @PathVariable Long idQuestion) {

        QuestionWithAnswerData response = forumService.getQuestion(token.getId(), idQuestion);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Return> createForum(@RequestAttribute("token") Token token,
            @RequestBody RegisterForumData data) {

        if (data.name().isEmpty())
            return new ResponseEntity<>(new Return("Please send a name", false), HttpStatus.BAD_REQUEST);

        Return response = forumService.createForum(token.getId(), data);

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

    }

    @PostMapping("/{idForum}/question")
    public ResponseEntity<Return> createQuestion(@RequestAttribute("token") Token token, @PathVariable Long idForum,
            @RequestBody RegisterQuestionData data) {

        Return response = forumService.createQuestion(token.getId(), idForum, data);

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

    }

    @PostMapping("/question/{idQuestion}/answer")
    public ResponseEntity<Return> createAnswer(@RequestAttribute("token") Token token, @PathVariable Long idQuestion,
            @RequestBody RegisterAnswerData data) {

        Return response = forumService.createAnswer(token.getId(), idQuestion, data);

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/like/{idAnswer}")
    public ResponseEntity<Return> likeAnswer(@RequestAttribute("token") Token token, @PathVariable Long idAnswer) {

        Return response = forumService.likeAnswer(token.getId(), idAnswer);

        if (response.result())
            return new ResponseEntity<>(response, HttpStatus.OK);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
