package com.example.demo.Models;

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
    @JoinColumn(name = "idForum", nullable = false)
    private Forum forum;

    @ManyToOne
    @JoinColumn(name = "idTopicForum", nullable = false)
    private ForumTopic topicForumEntity;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User userEntity;

    @Column
    private String text;

    @Column
    private String title;

    @Column
    private String date;

    public Long getIdQuestion() {
        return idQuestion;
    }

    public ForumTopic getTopicForumEntity() {
        return topicForumEntity;
    }

    public void setTopicForumEntity(ForumTopic topicForumEntity) {
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setIdQuestion(Long idQuestion) {
        this.idQuestion = idQuestion;
    }

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }
}
