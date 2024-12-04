package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbUserHardSkill")
public class UserHardSkill {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUserHardSkill;

    @ManyToOne
    @JoinColumn(name = "idHardSkill", nullable= false)
    private HardSkill hardSkillEntity; 

    
    @ManyToOne
    @JoinColumn(name = "idUser", nullable= false)
    private User userEntity;


    public Long getId() {
        return idUserHardSkill;
    }


    public void setId(Long id) {
        this.idUserHardSkill = id;
    }


    public HardSkill getHardSkillEntity() {
        return hardSkillEntity;
    }


    public void setHardSkillEntity(HardSkill hardSkillEntity) {
        this.hardSkillEntity = hardSkillEntity;
    }


    public User getUserEntity() {
        return userEntity;
    }


    public void setUserEntity(User userEntity) {
        this.userEntity = userEntity;
    }


}
