package com.example.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long>{

    Optional<Topic> findByName(String name);

    @Query(value = "SELECT * FROM tb_topic ORDER BY id_topic OFFSET :page ROWS FETCH NEXT :size ROWS ONLY", nativeQuery = true)
    List<Topic> findQuestionsWithPagination(@Param("page") int page, @Param("size") int size);
}
