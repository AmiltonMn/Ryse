package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.TopicMessage;

public interface TopicMessagesRepository extends JpaRepository<TopicMessage, Long> {
    @Query(value = "SELECT * FROM tb_topic_message where id_topic_chat = :idTopicChat", nativeQuery = true)
    List<TopicMessage> findMessagesWithChat(@Param("idTopicChat") Long idTopicChat);
}
