package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Models.LikeIdea;

@Repository
public interface LikeIdeaRepository extends JpaRepository<LikeIdea, Long> {


    @Modifying
    @Transactional
    @Query(value = "DELETE FROM tb_like_idea WHERE id_idea = :idIdea AND id_user = :idUser", nativeQuery = true)
    void excludeLikeIdea(@Param("idIdea") Long idIdea, @Param("idUser") Long idUser);

    @Query(value = "select COUNT(id_like_idea) from tb_like_idea where id_idea = :idIdea", nativeQuery = true)
    Integer getAllLikesIdea(@Param("idIdea") Long idIdea);

    @Query(value = "select COUNT(id_like_idea) from tb_like_idea where id_idea = :idIdea and id_user = :idUser", nativeQuery = true)
    Integer getLikesUserIdea(@Param("idIdea") Long idIdea, @Param("idUser") Long idUser);
}
