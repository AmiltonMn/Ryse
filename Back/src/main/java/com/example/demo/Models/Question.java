package com.example.demo.Models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Question {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idQuestion;

    @ManyToOne
    @JoinColumn(name = "idTopicForum", nullable = false)
    private TopicForum topicForumEntity;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User userEntity;

    @Column
    private String text;

    @Column
    private String title;

    @Column
    private Date date;

    public Long getIdQuestion() {
        return idQuestion;
    }

    public TopicForum getTopicForumEntity() {
        return topicForumEntity;
    }

    public void setTopicForumEntity(TopicForum topicForumEntity) {
        this.topicForumEntity = topicForumEntity;
    }

    public User getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
