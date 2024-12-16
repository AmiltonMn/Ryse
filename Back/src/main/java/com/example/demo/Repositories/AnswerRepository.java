package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Query(value = "Select * from tb_answer WHERE id_answer = :idAnswer", nativeQuery = true)
    Answer getAnswers(@Param("idAnswer") Long idAnswer);

    @Query(value = "Select * from tb_answer WHERE id_user = :idUser", nativeQuery = true)
    List<Answer> getAnswersByUser(@Param("idUser") Long idUser);

}
