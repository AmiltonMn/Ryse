package com.example.demo.Models;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbTopicChat")
public class TopicChat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTopicChat;


    @ManyToOne
    @JoinColumn(name = "idTopic", nullable = false)
    private Topic topic;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User user;

    @OneToMany(mappedBy="chat", cascade= CascadeType.REMOVE)
    @JsonManagedReference
    private List<TopicMessage> messages;

    @Column
    private String name;

    @Column
    private String date;

    public Long getIdTopicChat() {
        return idTopicChat;
    }

    public void setIdTopicChat(Long idTopicChat) {
        this.idTopicChat = idTopicChat;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public List<TopicMessage> getMessages() {
        return messages;
    }

    public void setMessages(List<TopicMessage> messages) {
        this.messages = messages;
    }

  

    
    
}
