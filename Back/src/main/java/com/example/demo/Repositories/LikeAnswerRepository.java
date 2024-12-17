package com.example.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.LikeAnswer;

@Repository
public interface LikeAnswerRepository extends JpaRepository<LikeAnswer, Long> {
    
    Optional<LikeAnswer> findByUserIdUserAndAnswerIdAnswer(Long idUser, Long idAnswer);

        @Query(value = "Select * from tb_like_answer WHERE id_user = :idUser", nativeQuery = true)
        List<LikeAnswer> getLikesUser(@Param("idUser") Long idUser);
}
