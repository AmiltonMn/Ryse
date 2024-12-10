package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbLikeAnswer")
public class LikeAnswer {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLikeAnswer;

    @ManyToOne
    @JoinColumn(name = "idAnswer", nullable= false)
    private Answer answer; 
    
    @ManyToOne
    @JoinColumn(name = "idUser", nullable= false)
    private User user;

    public Long getIdLikeAnswer() {
        return idLikeAnswer;
    }

    public Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
