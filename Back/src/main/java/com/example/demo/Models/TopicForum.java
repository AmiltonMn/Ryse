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
@Table(name = "tbTopicForum")
public class TopicForum {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTopicForum;

    @ManyToOne
    @JoinColumn(name = "idForum", nullable = false)
    private Forum forumEntity;

    @Column
    private String name;

    public Long getIdLikeIdea() {
        return idTopicForum;
    }

    public Forum getForumEntity() {
        return forumEntity;
    }

    public void setForumEntity(Forum forumEntity) {
        this.forumEntity = forumEntity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
