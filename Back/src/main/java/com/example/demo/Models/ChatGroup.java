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
@Table(name= "tbChatGroup")
public class ChatGroup {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idChatGroup;

    @ManyToOne
    @JoinColumn(name= "idGroup", nullable= false)
    private Group groupEntity;

    @Column
    private String name;

    @Column
    private String date;

    public Long getIdChatGroup() {
        return idChatGroup;
    }

    public Group getGroup() {
        return groupEntity;
    }

    public void setGroup(Group group) {
        this.groupEntity = group;
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

    
}
