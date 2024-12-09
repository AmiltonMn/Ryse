package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.TopicChatDTO.CreateChat;
import com.example.demo.DTO.TopicChatDTO.CreateMessage;
import com.example.demo.DTO.TopicChatDTO.TopicChatReturn;
import com.example.demo.DTO.TopicChatDTO.TopicChatUpdate;
import com.example.demo.Models.TopicChat;
import com.example.demo.Models.TopicMessage;

public interface TopicChatServices {
    TopicChatReturn createTopicChat(CreateChat data);
    TopicChatReturn createTopicChatMessage(CreateMessage data);
    TopicChatReturn deleteTopicChat(Long idTopicChat, Long idUser);
    TopicChatReturn updateNameChatTopic(TopicChatUpdate data);
    TopicChatReturn inativeMessageTopicChat(Long idTopicChatMessage, Long idUser);
    List<TopicChat> getTopicChats(Long idTopic);
    List<TopicMessage> getTopicMessage(Long idTopicChat);

}
