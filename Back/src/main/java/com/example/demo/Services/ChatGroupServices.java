package com.example.demo.Services;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.ChatGroupDto.NewChatGroupData;
import com.example.demo.DTO.ChatGroupDto.NewChatGroupResponse;
import com.example.demo.DTO.ChatGroupDto.DeleteChatResponse;
import com.example.demo.DTO.ChatGroupDto.GetAllChatsResponse;
import com.example.demo.DTO.ChatGroupDto.GetAllMessagesResponse;
import com.example.demo.DTO.ChatGroupDto.NewMessageResponse;

public interface ChatGroupServices {
    ResponseEntity<NewChatGroupResponse> createNewChat(Token token, NewChatGroupData data, Long idGroup);
    ResponseEntity<DeleteChatResponse> deleteChat(Long userId, Long chatId);
    ResponseEntity<GetAllChatsResponse> getAllChats(Long idGroup);
    ResponseEntity<NewMessageResponse> newMessage(Long idUser, Long idChat, String messageText);
    ResponseEntity<GetAllMessagesResponse> getAllMessages(Long idChat, Integer limit);
    ResponseEntity<GetAllMessagesResponse> deleteMessage(Long idChat, Long idMessage, Integer limit);
}
