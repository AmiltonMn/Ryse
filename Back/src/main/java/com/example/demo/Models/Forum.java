package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table( name = "tbForum" )
public class Forum {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private long idForum;

    @Column
    private String name;

    @Column
    private String date;

    public long getIdForum() {
        return idForum;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
