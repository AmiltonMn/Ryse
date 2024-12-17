package com.example.demo.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.ChatGroup;

@Repository
public interface  ChatGroupRepository extends JpaRepository<ChatGroup, Long>{
    
    @Query(value = "SELECT * FROM tb_chat_group cg WHERE cg.id_group = :idGroup AND cg.name = :name", nativeQuery = true)
    ArrayList<ChatGroup> findByNameAndIdGroup(@Param("idGroup") Long idGroup, @Param("name")  String name);

    @Query(value = "SELECT * FROM tb_chat_group cg WHERE cg.id_group = :idGroup", nativeQuery= true)
    ArrayList<ChatGroup> findByIdGroup(@Param("idGroup") Long idGroup);
}
