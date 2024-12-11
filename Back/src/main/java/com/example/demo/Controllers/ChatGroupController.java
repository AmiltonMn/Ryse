package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ChatGroupDto.DeleteChatResponse;
import com.example.demo.DTO.ChatGroupDto.GetAllChatsResponse;
import com.example.demo.DTO.ChatGroupDto.GetAllMessagesResponse;
import com.example.demo.DTO.ChatGroupDto.NewChatGroupData;
import com.example.demo.DTO.ChatGroupDto.NewChatGroupResponse;
import com.example.demo.DTO.ChatGroupDto.NewMessageResponse;
import com.example.demo.DTO.Token;
import com.example.demo.Services.ChatGroupServices;

@RestController
@RequestMapping("/group/{idGroup}/chats")
public class ChatGroupController {

    @Autowired
    ChatGroupServices chatGroupService;

    @PostMapping("/newChat")
    public ResponseEntity<NewChatGroupResponse> newGroupChat(@RequestAttribute("token") Token token, @RequestBody NewChatGroupData data, @PathVariable("idGroup") Long idGroup) {

        var response = chatGroupService.createNewChat(token, data, idGroup);

        return response;
    }

    @DeleteMapping("/{idChat}/delete")
    public ResponseEntity<DeleteChatResponse> deleteChat(@RequestAttribute("token") Token token, @PathVariable Long idChat) {

        ResponseEntity<DeleteChatResponse> response = chatGroupService.deleteChat(token.getId(), idChat);

        return response;
    }

    @GetMapping
    public ResponseEntity<GetAllChatsResponse> getAllChats(@PathVariable Long idGroup) {

        ResponseEntity<GetAllChatsResponse> response = chatGroupService.getAllChats(idGroup);

        return response;
    }

    // Rotas das mensagens

    @PostMapping("/{idChat}")
    public ResponseEntity<NewMessageResponse> newMessage(@RequestAttribute("token") Token token, @PathVariable("idChat") Long idChat, @RequestBody String text) {

        ResponseEntity<NewMessageResponse> response = chatGroupService.newMessage(token.getId(), idChat, text);

        return response;
    }

    @GetMapping("/{idChat}/{limit}")
    public ResponseEntity<GetAllMessagesResponse> getAllMessages(@PathVariable("idChat") Long idChat, @PathVariable("limit") Integer limit) {

        ResponseEntity<GetAllMessagesResponse> response = chatGroupService.getAllMessages(idChat, limit);

        return response;
    }

    @PutMapping("/{idChat}/{idMessage}")
    public ResponseEntity<GetAllMessagesResponse> deleteMessage(@PathVariable("idChat") Long idChat, @PathVariable("idMessage") Long idMessage, @RequestBody Integer limit) {

        ResponseEntity<GetAllMessagesResponse> response = chatGroupService.deleteMessage(idChat, idMessage, limit);

        return response;
    }
}
