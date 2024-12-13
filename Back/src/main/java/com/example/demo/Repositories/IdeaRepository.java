package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Idea;

@Repository
public interface IdeaRepository extends JpaRepository<Idea, Long>{
    List<Idea> findByStatus(Integer status);
}
