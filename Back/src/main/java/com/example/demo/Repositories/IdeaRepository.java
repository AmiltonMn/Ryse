package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Idea;

@Repository
public interface IdeaRepository extends JpaRepository<Idea, Long>{
    List<Idea> findByStatus(Integer status);
    List<Idea> findByTitle(String title);

    @Query("SELECT * FROM tb_idea WHERE title LIKE %:query% AND status = :status", nativeQuery = true)
    List<Idea> findByQueryAndStatus(@Param("query") String query, @Param("status") Integer status);
}
