package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.IdeaDTO.IdeaData;
import com.example.demo.DTO.IdeaDTO.IdeaReturn;
import com.example.demo.DTO.IdeaDTO.LikeData;
import com.example.demo.Models.Idea;
import com.example.demo.Services.IdeaServices;

@RestController
@RequestMapping("/idea")
public class IdeaController {

    @Autowired
    IdeaServices ideaServices;

    @PostMapping
    public ResponseEntity<IdeaReturn> createIdea(@RequestBody IdeaData data) {

        if (data.text().isEmpty()) {
            return new ResponseEntity<>(new IdeaReturn("Insert a text", false), HttpStatus.NO_CONTENT);
        }

        var response = ideaServices.createIdea(data.text(), data.idUser());

        return response;
    }

    @PostMapping("/Like")
    public ResponseEntity<IdeaReturn> LikeIdea(@RequestBody LikeData data){

        var response = ideaServices.addLikeToIdea(data.idUser(), data.idIdea());
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

    @GetMapping
    public ResponseEntity<List<Idea>> getHardSkill() {
        return new ResponseEntity<>(ideaServices.getAllIdea(), HttpStatus.OK);
    }

    @GetMapping("/{idIdea}")
    public ResponseEntity<Integer> getAllLikesOfAIdea(@PathVariable Long idIdea) {
        return new ResponseEntity<>(ideaServices.getAllLikesIdea(idIdea), HttpStatus.OK);
    }

}
