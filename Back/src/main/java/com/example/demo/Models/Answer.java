package com.example.demo.Models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbAnswer")
public class Answer {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAnswer;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User userEntity;

    @ManyToOne
    @JoinColumn(name = "idQuestion", nullable = false)
    private Question questionEntity;

    @Column
    private String text;

    @Column
    private Date date;

    public Long getIdAnswer() {
        return idAnswer;
    }

    public User getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }

    public Question getQuestionEntity() {
        return questionEntity;
    }

    public void setQuestionEntity(Question questionEntity) {
        this.questionEntity = questionEntity;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
