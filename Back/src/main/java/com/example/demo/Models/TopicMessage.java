package com.example.demo.Models;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbTopicMessage")
public class TopicMessage {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTopicMessage;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "idTopicChat", nullable = false)
    @JsonBackReference
    private TopicChat chat;

    @Column
    private String text;

    @Column
    private Boolean deleted;

    @Column
    private String date;

    public Long getIdTopicMessage() {
        return idTopicMessage;
    }

    public void setIdTopicMessage(Long idTopicMessage) {
        this.idTopicMessage = idTopicMessage;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public TopicChat getChat() {
        return chat;
    }

    public void setChat(TopicChat chat) {
        this.chat = chat;
    }

    
}
