package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    
}
