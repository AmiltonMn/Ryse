package com.example.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Forum;

public interface ForumRepository extends JpaRepository<Forum, Long>{

    Optional<Forum> findByName(String name);

    @Query(value = "SELECT * FROM tb_forum ORDER BY id_forum OFFSET :page ROWS FETCH NEXT :size ROWS ONLY", nativeQuery = true)
    List<Forum> findForumWithPagination(@Param("page") int page, @Param("size") int size);
}
