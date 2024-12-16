package com.example.demo.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Answer;

import jakarta.transaction.Transactional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE tb_answer SET verified = 1 WHERE id_answer = :idAnswer", nativeQuery = true)
    void verifyAnswer(@Param("idAnswer") Long idAnswer);

    @Modifying
    @Transactional
    @Query(value = "UPDATE tb_answer SET verified = 0 WHERE id_answer = :idAnswer", nativeQuery = true)
    void unverifyAnswer(@Param("idAnswer") Long idAnswer);
}
