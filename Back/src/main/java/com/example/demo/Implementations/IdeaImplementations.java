package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.IdeaDTO.IdeaData;
import com.example.demo.DTO.IdeaDTO.IdeaReturn;
import com.example.demo.Models.Idea;
import com.example.demo.Models.LikeIdea;
import com.example.demo.Repositories.IdeaRepository;
import com.example.demo.Repositories.LikeIdeaRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.IdeaServices;

public class IdeaImplementations implements IdeaServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    IdeaRepository ideaRepo;

    @Autowired
    LikeIdeaRepository likeIdeaRepo;

    @Override
    public ResponseEntity<IdeaReturn> createIdea(String title, String text, Long idUser) {
        var user = userRepo.findById(idUser);

        Idea newIdea = new Idea();
        newIdea.setUserEntity(user.get());
        newIdea.setText(text);
        newIdea.setTitle(title);
        newIdea.setDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/YYYY - HH:mm")).toString());
        newIdea.setStatus(0);

        ideaRepo.save(newIdea);

        return new ResponseEntity<>(new IdeaReturn("Idea created with sucess", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<IdeaReturn> deleteIdea(Long idIdea) {
        ideaRepo.deleteById(idIdea);
        return new ResponseEntity<>(new IdeaReturn("Idea deleted with sucess", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<IdeaReturn> addLikeToIdea(Long idUser, Long idIdea) {
        var user = userRepo.findById(idUser);
        var idea = ideaRepo.findById(idIdea);

        if (user.isEmpty())
            return new ResponseEntity<>(new IdeaReturn("Don't have any user with this id", false), HttpStatus.CONFLICT);

        if (idea.isEmpty())
            return new ResponseEntity<>(new IdeaReturn("Don't have any idea with this id", false), HttpStatus.CONFLICT);

        LikeIdea newLikeIdea = new LikeIdea();

        if (getLikeIdeaUser(idea.get().getId(), user.get().getId()) >= 1) {
            return new ResponseEntity<>(new IdeaReturn("This user already have done a like in this idea", false),HttpStatus.CONFLICT);
        }

        newLikeIdea.setIdeaEntity(idea.get());
        newLikeIdea.setUserEntity(user.get());

        likeIdeaRepo.save(newLikeIdea);

        return new ResponseEntity<>(new IdeaReturn("Like created with success", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<IdeaReturn> deleteLikeToIdea(Long idUser, Long idIdea) {

        likeIdeaRepo.excludeLikeIdea(idIdea, idUser);
        return new ResponseEntity<>(new IdeaReturn("Like removed with success", true), HttpStatus.OK);
    }

    @Override
    public List<IdeaData> getAllIdea(Long idUser, Integer status, String query) {

        List<Idea> findIdea;

        if(status.equals(3) && query == "") {
            System.out.println("Entrou no findAll");
            findIdea = ideaRepo.findByQuery(query);
        } else if (status == 3 && query != null) {
            System.out.println("Entrou na pesquisa por query com todos");
            findIdea = ideaRepo.findByQuery(query);
        } else if(status != 3 && query == null) {
            System.out.println("Entrou no find by status");
            findIdea = ideaRepo.findByStatus(status);
        } else {
            System.out.println("Entrou no query e status");
            findIdea = ideaRepo.findByQueryAndStatus(query, status);
        }

        List<IdeaData> response = new ArrayList<>();

        for(Idea idea : findIdea){

            System.out.println("TA AQUI A IDEIA OLHA: " + idea.getTitle());

            Integer allLikes = likeIdeaRepo.getAllLikesIdea(idea.getId());
            Boolean liked = false;

            if (likeIdeaRepo.getLikesUserIdea(idea.getId(), idUser) != null) {
                liked = true;
            }

            response.add(new IdeaData(
                idea.getId(),
                idea.getUserEntity().getId(), 
                idea.getUserEntity().getPhoto(), 
                idea.getUserEntity().getName(), 
                idea.getTitle(),
                idea.getText(),
                idea.getDate(), 
                idea.getStatus(),
                allLikes,
                liked
            ));
        }

        return response;
    }

    @Override
    public Integer getAllLikesIdea(Long idIdea) {
        return likeIdeaRepo.getAllLikesIdea(idIdea);
    }

    @Override
    public Integer getLikeIdeaUser(Long idIdea, Long IdUser) {
        return likeIdeaRepo.getLikesUserIdea(idIdea, IdUser);
    }

}
