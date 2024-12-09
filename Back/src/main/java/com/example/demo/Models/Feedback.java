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
@Table(name= "tbFeedback")
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFeedback;

    @ManyToOne
    @JoinColumn(name= "idUserSender", nullable= false)
    private User userSender;

    @ManyToOne
    @JoinColumn(name= "idUserReceiver", nullable= false)
    private User userReceiver;

    @ManyToOne
    @JoinColumn(name= "idGroup", nullable= false)
    private Group groupEntity;

    @Column
    private Boolean privacity;

    @Column
    private String text;

    public Long getIdFeedback() {
        return idFeedback;
    }

    public User getUserSender() {
        return userSender;
    }

    public void setUserSender(User userSender) {
        this.userSender = userSender;
    }

    public User getUserReceiver() {
        return userReceiver;
    }

    public void setUserReceiver(User userReceiver) {
        this.userReceiver = userReceiver;
    }

    public Group getGroupEntity() {
        return groupEntity;
    }

    public void setGroupEntity(Group groupEntity) {
        this.groupEntity = groupEntity;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getPrivacity() {
        return privacity;
    }

    public void setPrivacity(Boolean privacity) {
        this.privacity = privacity;
    }

}