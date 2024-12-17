package com.example.demo.Services;

import java.util.ArrayList;

import com.example.demo.DTO.TopicChatDTO.CreateChat;
import com.example.demo.DTO.TopicChatDTO.CreateMessage;
import com.example.demo.DTO.TopicChatDTO.GetTopicChatMessagesResponse;
import com.example.demo.DTO.TopicChatDTO.GetTopicChats;
import com.example.demo.DTO.TopicChatDTO.TopicChatMessageResponse;
import com.example.demo.DTO.TopicChatDTO.TopicChatReturn;
import com.example.demo.DTO.TopicChatDTO.TopicChatUpdate;

public interface TopicChatServices {
    TopicChatReturn createTopicChat(CreateChat data);
    TopicChatMessageResponse createTopicChatMessage(CreateMessage data);
    TopicChatReturn deleteTopicChat(Long idTopicChat, Long idUser);
    TopicChatReturn updateNameChatTopic(TopicChatUpdate data);
    TopicChatMessageResponse inativeMessageTopicChat(Long idTopicChatMessage, Long idUser);
    ArrayList<GetTopicChats> getTopicChats(Long idTopic);
    GetTopicChatMessagesResponse getTopicMessage(Long idUser, Long idTopicChat);

}
