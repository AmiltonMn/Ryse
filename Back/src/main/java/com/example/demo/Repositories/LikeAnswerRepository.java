package com.example.demo.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.LikeAnswer;

@Repository
public interface LikeAnswerRepository extends JpaRepository<LikeAnswer, Long> {
    
    Optional<LikeAnswer> findByUserIdUserAndAnswerIdAnswer(Long idUser, Long idAnswer);
}
