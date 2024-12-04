package com.example.demo.Models;

import java.util.Date;

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
    private Date date;

    public long getIdForum() {
        return idForum;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
