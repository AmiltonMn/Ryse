package com.example.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.TopicChat;

public interface TopicChatRepository extends JpaRepository<TopicChat, Long> {
    @Query(value = "SELECT * FROM tb_topic_chat where name = :name", nativeQuery = true)
    Optional<TopicChat> findChatWithName(@Param("name") String name);

    @Query(value = "SELECT * FROM tb_topic_chat where id_topic = :idTopic", nativeQuery = true)
    List<TopicChat> findChatWithTopic(@Param("idTopic") Long idTopic);
}
