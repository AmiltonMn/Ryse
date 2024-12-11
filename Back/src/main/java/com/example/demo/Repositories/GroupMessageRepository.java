package com.example.demo.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.GroupMessage;

@Repository
public interface GroupMessageRepository extends JpaRepository<GroupMessage, Long>{

    @Query(value = "SELECT * FROM tb_group_message WHERE id_chat = :idChat", nativeQuery = true)
    ArrayList<GroupMessage> getAllMessagesByIdChat(@Param("idChat") Long idChat);


    @Query(value = "SELECT TOP (:limit) * FROM tb_group_message WHERE id_chat = :idChat ORDER BY id_group_message DESC", nativeQuery = true)
    ArrayList<GroupMessage> getAllMessagesWithLimit(@Param("idChat") Long idChat, @Param("limit") Integer limit);
    
}