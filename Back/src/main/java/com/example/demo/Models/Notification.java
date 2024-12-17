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
@Table(name = "tbNotification")
public class Notification {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNotification;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable= false)
    private User userEntity;

    @Column
    private String Text;

    @Column
    private String date;

    public Long getId() {
        return idNotification;
    }

    public void setId(Long id) {
        this.idNotification = id;
    }

    public User getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }

    public String getText() {
        return Text;
    }

    public void setText(String text) {
        Text = text;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
