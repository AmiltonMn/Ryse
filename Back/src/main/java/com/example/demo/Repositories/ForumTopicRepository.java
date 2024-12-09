package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.ForumTopic;

public interface ForumTopicRepository extends JpaRepository<ForumTopic, Long>{

    
}
