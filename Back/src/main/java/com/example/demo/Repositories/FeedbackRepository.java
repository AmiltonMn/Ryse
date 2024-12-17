package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Feedback;

public interface FeedbackRepository  extends JpaRepository<Feedback, Long> {
   
    @Query(value = "Select * from tb_feedback WHERE id_user_receiver = :idUser ", nativeQuery = true)
    List<Feedback> getFeedbacksReceiver(@Param("idUser") Long idUser);

    @Query(value = "Select * from tb_feedback WHERE id_user_sender = :idUser", nativeQuery = true)
    List<Feedback> getFeedbacksSender(@Param("idUser") Long idUser);
}
