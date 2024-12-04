package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbUser")
public class User {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String edv;

    @Column
    private String password;

    @Column
    private String bio;

    @Column
    private String photo;

    @Column
    private String careerFocus;

    @Column
    private String userState;


    
    public Long getId() {
        return idUser;
    }
    
    public void setId(Long id) {
        this.idUser = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getEdv() {
        return edv;
    }
    
    public void setEdv(String edv) {
        this.edv = edv;
    }
    
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getBio() {
        return bio;
    }
    
    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getCareerFocus() {
        return careerFocus;
    }

    public void setCareerFocus(String careerFocus) {
        this.careerFocus = careerFocus;
    }

    public String getUserState() {
        return userState;
    }

    public void setUserState(String userState) {
        this.userState = userState;
    }

}
