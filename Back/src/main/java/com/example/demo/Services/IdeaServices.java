package com.example.demo.Services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.IdeaDTO.IdeaReturn;
import com.example.demo.Models.Idea;

public interface IdeaServices {
    ResponseEntity<IdeaReturn> createIdea(String text, Long idUser);

    ResponseEntity<IdeaReturn> deleteIdea(Long idIdea);

    ResponseEntity<IdeaReturn> addLikeToIdea(Long idUser, Long idIdea);

    ResponseEntity<IdeaReturn> deleteLikeToIdea(Long idUser, Long idIdea);

    List<Idea> getAllIdea();

    Integer getAllLikesIdea(Long idIdea);

    Integer getLikeIdeaUser(Long idIdea, Long IdUser);
}
