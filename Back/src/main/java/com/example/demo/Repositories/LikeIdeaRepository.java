package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.LikeIdea;

public interface LikeIdeaRepository extends JpaRepository<LikeIdea, Long> {
    
}
