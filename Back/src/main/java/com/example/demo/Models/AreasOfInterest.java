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
@Table(name = "tbAreaOfInterest")
public class AreasOfInterest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAreaOfInterest;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User userEntity;

    @Column
    private String text;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }
    
    public Long getIdAreaOfInterest() {
        return idAreaOfInterest;
    }
}
