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

import com.example.demo.DTO.IdeaDTO.IdeaData;
import com.example.demo.DTO.IdeaDTO.IdeaReturn;
import com.example.demo.DTO.IdeaDTO.IdeaStatus;
import com.example.demo.DTO.IdeaDTO.LikeData;
import com.example.demo.DTO.IdeaDTO.newIdeaData;
import com.example.demo.DTO.Token;
import com.example.demo.Services.IdeaServices;

@RestController
@RequestMapping("/idea")
public class IdeaController {

    @Autowired
    IdeaServices ideaServices;

    @PostMapping
    public ResponseEntity<IdeaReturn> createIdea(@RequestAttribute("token") Token token, @RequestBody newIdeaData data) {

        if (data.text() == null) {
            return new ResponseEntity<>(new IdeaReturn("Insert a text", false), HttpStatus.NO_CONTENT);
        }

        var response = ideaServices.createIdea(data.title(), data.text(), token.getId());

        return response;
    }

    @PostMapping("/like")
    public ResponseEntity<IdeaReturn> LikeIdea(@RequestAttribute("token") Token token, @RequestBody LikeData data){

        var response = ideaServices.addLikeToIdea(token.getId(), data.idIdea());
        
        return response;
    }
    
    @DeleteMapping("/{idIdea}")
    public ResponseEntity<IdeaReturn> deleteIdea(@PathVariable Long idIdea) {

        var response = ideaServices.deleteIdea(idIdea);
        return response;
    }

    @DeleteMapping("/{idUser}/{idIdea}")
    public ResponseEntity<IdeaReturn> deleteLikefromIdea(@PathVariable Long idUser, @PathVariable Long idIdea) {

        var response = ideaServices.deleteLikeToIdea(idUser, idIdea);
        return response;
    }

    // @GetMapping
    // public ResponseEntity<List<Idea>> getHardSkill() {
    //     return new ResponseEntity<>(ideaServices.getAllIdea(), HttpStatus.OK);
    // }

    @GetMapping("/{idIdea}")
    public ResponseEntity<Integer> getAllLikesOfAIdea(@PathVariable Long idIdea) {
        return new ResponseEntity<>(ideaServices.getAllLikesIdea(idIdea), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<IdeaData>> getAllIdea(@RequestAttribute("token") Token token, @RequestParam Integer status, @RequestParam String query) {

        List<IdeaData> response = ideaServices.getAllIdea(token.getId(), status, query);

        if(response.isEmpty())
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<IdeaReturn> updateStatus(@RequestBody IdeaStatus data) {

        var response = ideaServices.updateStatus(data.idIdea(), data.status());
        return response;
    }
}
