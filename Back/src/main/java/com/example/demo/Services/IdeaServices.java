package com.example.demo.Services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.IdeaDTO.IdeaData;
import com.example.demo.DTO.IdeaDTO.IdeaReturn;

public interface IdeaServices {
    ResponseEntity<IdeaReturn> createIdea(String title, String text, Long idUser);

    ResponseEntity<IdeaReturn> deleteIdea(Long idIdea);

    ResponseEntity<IdeaReturn> addLikeToIdea(Long idUser, Long idIdea);

    ResponseEntity<IdeaReturn> deleteLikeToIdea(Long idUser, Long idIdea);

    List<IdeaData> getAllIdea(Long idUser, Integer status, String query);

    Integer getAllLikesIdea(Long idIdea);

    Integer getLikeIdeaUser(Long idIdea, Long IdUser);
}
