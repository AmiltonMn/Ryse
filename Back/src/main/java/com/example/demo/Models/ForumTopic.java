package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbForumTopic")
public class ForumTopic {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTopicForum;

    @Column
    private String name;

    public Long getidTopicForum() {
        return idTopicForum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
