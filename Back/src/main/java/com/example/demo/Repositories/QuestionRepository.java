package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Question;

public interface QuestionRepository extends JpaRepository<Question, Long>{

    @Query(value = "SELECT * FROM tb_question WHERE id_forum = :id_forum ORDER BY id_question OFFSET :page ROWS FETCH NEXT :size ROWS ONLY", nativeQuery = true)
    List<Question> findQuestionWithPagination(@Param("page") int page, @Param("size") int size, @Param("id_forum") Long id_forum);

    @Query(value = "SELECT * FROM tb_question WHERE id_forum = :id_forum and id_topic_forum = :id_topic ORDER BY id_question OFFSET :page ROWS FETCH NEXT :size ROWS ONLY", nativeQuery = true)
    List<Question> findQuestionWithPaginationTopic(@Param("page") int page, @Param("size") int size, @Param("id_forum") Long id_forum, @Param("id_topic") Long id_topic);
}
