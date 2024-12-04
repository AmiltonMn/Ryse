package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name= "tbUserGroup")
public class UserGroup {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUserGroup;

    @ManyToOne
    @JoinColumn(name= "idUser", nullable= false)
    private User userEntiry;

    @ManyToOne
    @JoinColumn(name= "idGroup", nullable= false)
    private Group groupEntity;

    public Long getIdUserGroup() {
        return idUserGroup;
    }

    public User getUser() {
        return userEntiry;
    }

    public void setUser(User user) {
        this.userEntiry = user;
    }

    public Group getGroup() {
        return groupEntity;
    }

    public void setGroup(Group group) {
        this.groupEntity = group;
    }

    
}
