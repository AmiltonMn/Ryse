package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Idea;

public interface IdeaRepository extends JpaRepository<Idea, Long>{
    
}
