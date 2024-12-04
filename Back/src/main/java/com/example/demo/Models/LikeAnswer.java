package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbLikeAnswer")
public class LikeAnswer {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLikeAnswer;

    @ManyToOne
    @JoinColumn(name = "idAnswer", nullable= false)
    private Idea answerEntity; 
    
    @ManyToOne
    @JoinColumn(name = "idUser", nullable= false)
    private User userEntity;

    public Long getIdLikeIdea() {
        return idLikeAnswer;
    }

    public Idea getAnswerEntity() {
        return answerEntity;
    }

    public void setAnswerEntity(Idea answerEntity) {
        this.answerEntity = answerEntity;
    }

    public User getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }

}
