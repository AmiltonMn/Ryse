package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbHardSkill")
public class HardSkill {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idHardSkill;

    @Column
    private String name;

    public Long getId() {
        return idHardSkill;
    }

    public void setId(Long id) {
        this.idHardSkill = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
