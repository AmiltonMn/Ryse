package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "tbGroupMessage")
public class GroupMessage {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idGroupMessage;

    @ManyToOne
    @JoinColumn(name= "idUser", nullable= false)
    private User userEntity;

    @ManyToOne
    @JoinColumn(name = "idChat")
    private ChatGroup chatGroupEntity;

    @Column
    private String text;

    @Column
    private Boolean deleted;

    @Column
    private String date;

    public Long getIdGroupMessage() {
        return idGroupMessage;
    }

    public User getUser() {
        return userEntity;
    }

    public void setUser(User user) {
        this.userEntity = user;
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

    public ChatGroup getChatGroupEntity() {
        return chatGroupEntity;
    }

    public void setChatGroupEntity(ChatGroup chatGroupEntity) {
        this.chatGroupEntity = chatGroupEntity;
    }

}
