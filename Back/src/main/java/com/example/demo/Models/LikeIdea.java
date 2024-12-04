package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbLikeIdea")
public class LikeIdea {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLikeIdea;

    @ManyToOne
    @JoinColumn(name = "idIdea", nullable= false)
    private Idea ideaEntity; 
    
    @ManyToOne
    @JoinColumn(name = "idUser", nullable= false)
    private User userEntity;


    public Long getId() {
        return idLikeIdea;
    }


    public void setId(Long id) {
        this.idLikeIdea = id;
    }


    public Idea getIdeaEntity() {
        return ideaEntity;
    }


    public void setIdeaEntity(Idea ideaEntity) {
        this.ideaEntity = ideaEntity;
    }


    public User getUserEntity() {
        return userEntity;
    }


    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }

}
