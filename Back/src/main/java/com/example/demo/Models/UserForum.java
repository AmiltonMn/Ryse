package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table( name = "tbUserForum")
public class UserForum {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private long idUserForum;

    @ManyToOne
    @JoinColumn(name = "idForum", nullable = false)
    private Forum forumEntity;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User userEntity;

    public long getIdUserForum() {
        return idUserForum;
    }

    public Forum getForumEntity() {
        return forumEntity;
    }

    public void setForumEntity(Forum forumEntity) {
        this.forumEntity = forumEntity;
    }

    public User getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }
}