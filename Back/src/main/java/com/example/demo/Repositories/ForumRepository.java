package com.example.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.Forum;

public interface ForumRepository extends JpaRepository<Forum, Long>{

    Optional<Forum> findByName(String name);

    @Query(value = "SELECT TOP(:size) f.id_forum AS idForum, u.name AS username, f.date AS date, f.name AS title, " +
        "IIF(f.id_user = :idUser, 1, 0) AS isOwner, " +
        "count(q.id_question) AS questionsCount " +
        "FROM tb_forum f " +
        "LEFT JOIN tb_question q on f.id_forum = q.id_forum " +
        "INNER JOIN tb_user u on f.id_user = u.id_user " +
        "WHERE f.name LIKE %:query% " +
        "GROUP BY f.id_forum, f.date, f.name, f.id_user, u.name", nativeQuery = true)
    List<Object[]> findForumWithQueryAndSize(@Param("query") String query, @Param("size") int size, @Param("idUser") Long idUser);

}

