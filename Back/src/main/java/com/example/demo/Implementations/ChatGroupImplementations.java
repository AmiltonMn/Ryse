package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.ChatGroupDto.ChatsData;
import com.example.demo.DTO.ChatGroupDto.DeleteChatResponse;
import com.example.demo.DTO.ChatGroupDto.GetAllChatsResponse;
import com.example.demo.DTO.ChatGroupDto.GetAllMessagesResponse;
import com.example.demo.DTO.ChatGroupDto.MessagesData;
import com.example.demo.DTO.ChatGroupDto.NewChatGroupData;
import com.example.demo.DTO.ChatGroupDto.NewChatGroupResponse;
import com.example.demo.DTO.ChatGroupDto.NewMessageResponse;
import com.example.demo.DTO.Token;
import com.example.demo.Models.ChatGroup;
import com.example.demo.Models.Group;
import com.example.demo.Models.GroupMessage;
import com.example.demo.Models.User;
import com.example.demo.Repositories.ChatGroupRepository;
import com.example.demo.Repositories.GroupMessageRepository;
import com.example.demo.Repositories.GroupRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.ChatGroupServices;

public class ChatGroupImplementations implements ChatGroupServices {

    @Autowired
    GroupRepository groupRepo;

    @Autowired
    UserRepository userRepo;
    
    @Autowired
    ChatGroupRepository chatGroupRepo;

    @Autowired
    GroupMessageRepository groupMessageRepo;

    @Override
    public ResponseEntity<NewChatGroupResponse> createNewChat(Token token, NewChatGroupData data, Long idGroup) {
    
        if (data.name().isEmpty()) {
            return new ResponseEntity<>(new NewChatGroupResponse("Please choose a name for the chat!", null), HttpStatus.FORBIDDEN); 
        }

        ChatGroup newChatGroup = new ChatGroup();

        var getGroup = groupRepo.findById(idGroup);
        Group group = getGroup.get();

        var getUser = userRepo.findById(token.getId());
        User user = getUser.get();

        String now = LocalDateTime.now().toString();

        ArrayList<ChatGroup> groupChatsList = chatGroupRepo.findByNameAndIdGroup(idGroup, data.name());

        if (!groupChatsList.isEmpty()) {
            return new ResponseEntity<>(new NewChatGroupResponse("There is already a chat with that name", null), HttpStatus.BAD_REQUEST); 
        }

        newChatGroup.setName(data.name());
        newChatGroup.setGroup(group);
        newChatGroup.setDate(now);
        newChatGroup.setUserEntity(user);

        chatGroupRepo.save(newChatGroup);

        ArrayList<ChatGroup> chatsRaw = chatGroupRepo.findByIdGroup(idGroup);

        ArrayList<ChatsData> chats = new ArrayList<>();

        for (ChatGroup chatGroup : chatsRaw) {
            ChatsData chat =  new ChatsData(
                chatGroup.getIdChatGroup(), 
                chatGroup.getName(), 
                chatGroup.getDate(), chatGroup.getUserEntity().getId(),
                chatGroup.getUserEntity().getName(),
                chatGroup.getUserEntity().getUserState(), 
                chatGroup.getGroup().getIdGroup(),
                chatGroup.getGroup().getName()
            );

            chats.add(chat);
        }

        return new ResponseEntity<>(new NewChatGroupResponse("Chat created with success", chats), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<DeleteChatResponse> deleteChat(Long userId, Long chatId) {

        var getGroupChat = chatGroupRepo.findById(chatId);
        ChatGroup chatGroup = getGroupChat.get();

        Group group = chatGroup.getGroup();
        
        if (group.getUserEntity().getId().equals(userId)) {

            if (!chatGroup.getUserEntity().getId().equals(userId)) {   
                return new ResponseEntity<>(new DeleteChatResponse("You don't have permission to delete this chat!", false, null), HttpStatus.FORBIDDEN);
            }
        }

        ArrayList<ChatGroup> chatsRaw = chatGroupRepo.findByIdGroup(chatGroup.getGroup().getIdGroup());

        ArrayList<ChatsData> chats = new ArrayList<>();

        for (ChatGroup chatGroupIteration : chatsRaw) {
            ChatsData chat =  new ChatsData(
                chatGroupIteration.getIdChatGroup(), 
                chatGroupIteration.getName(), 
                chatGroupIteration.getDate(), chatGroup.getUserEntity().getId(),
                chatGroupIteration.getUserEntity().getName(),
                chatGroupIteration.getUserEntity().getUserState(), 
                chatGroupIteration.getGroup().getIdGroup(),
                chatGroupIteration.getGroup().getName()
            );

            chats.add(chat);
        }

        chatGroupRepo.delete(chatGroup);

        return new ResponseEntity<>(new DeleteChatResponse("The chat was successfully deleted!", true, chats), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<GetAllChatsResponse> getAllChats(Long idGroup) {

        ArrayList<ChatGroup> chatsRaw = chatGroupRepo.findByIdGroup(idGroup);

        ArrayList<ChatsData> chats = new ArrayList<>();

        for (ChatGroup chatGroup : chatsRaw) {
            ChatsData chat =  new ChatsData(
                chatGroup.getIdChatGroup(), 
                chatGroup.getName(), 
                chatGroup.getDate(), chatGroup.getUserEntity().getId(),
                chatGroup.getUserEntity().getName(),
                chatGroup.getUserEntity().getUserState(), 
                chatGroup.getGroup().getIdGroup(),
                chatGroup.getGroup().getName()
            );

            chats.add(chat);
        }

        if (chats.isEmpty()) {
            return new ResponseEntity<>(new GetAllChatsResponse(chats, "This group doesn't have any chat!", true), HttpStatus.OK);
        }
        
        return new ResponseEntity<>(new GetAllChatsResponse(chats, "Chats gotten with success!", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<NewMessageResponse> newMessage(Long idUser, Long idChat, String messageText) {
        
        var getUser = userRepo.findById(idUser);
        var getChat = chatGroupRepo.findById(idChat);

        User user = getUser.get();
        ChatGroup chat = getChat.get();

        GroupMessage newMessage = new GroupMessage();

        ArrayList<GroupMessage> groupMessagesRaw = groupMessageRepo.getAllMessagesByIdChat(idChat);

        ArrayList<MessagesData> messages = new ArrayList<>();

        String now = LocalDateTime.now().toString();
        
        if (!messageText.isEmpty()) {
            newMessage.setText(messageText);
            newMessage.setDeleted(false);
            newMessage.setDate(now);
            newMessage.setUser(user);
            newMessage.setChatGroupEntity(chat);
            
            groupMessageRepo.save(newMessage);
        }

        for (GroupMessage groupMessage : groupMessagesRaw) {

            String text = "";

            if (groupMessage.getDeleted()) {
                text = "That message was deleted!";
            } else {
                text = groupMessage.getText();
            }
            
            MessagesData message = new MessagesData(
                groupMessage.getUser().getId(), 
                groupMessage.getUser().getName(), 
                groupMessage.getUser().getPhoto(), 
                groupMessage.getIdGroupMessage(), 
                text, 
                groupMessage.getDate(), 
                groupMessage.getDeleted(), 
                groupMessage.getChatGroupEntity().getIdChatGroup(), 
                groupMessage.getChatGroupEntity().getName()
            );

            messages.add(message);
        }

        if (messageText.isEmpty()) {
            return new ResponseEntity<>(new NewMessageResponse(messages, "You can't send an empty message!", false), HttpStatus.BAD_REQUEST);
        }

        newMessage.setText(messageText);
        newMessage.setDeleted(false);
        newMessage.setDate(now);
        newMessage.setUser(user);

        groupMessageRepo.save(newMessage);

        return new ResponseEntity<>(new NewMessageResponse(messages, messageText, true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<GetAllMessagesResponse> getAllMessages(Long idChat, Integer limit) {

        ArrayList<GroupMessage> groupMessagesRaw = groupMessageRepo.getAllMessagesByIdChat(idChat);

        ArrayList<MessagesData> messages = new ArrayList<>();

        if (groupMessagesRaw.isEmpty()) {
            return new ResponseEntity<>(new GetAllMessagesResponse(messages, "There are no comments here!", false), HttpStatus.NOT_FOUND);
        }

        for (GroupMessage groupMessage : groupMessagesRaw) {

            String text = "";

            if (groupMessage.getDeleted()) {
                text = "That message was deleted!";
            } else {
                text = groupMessage.getText();
            }
            
            MessagesData message = new MessagesData(
                groupMessage.getUser().getId(), 
                groupMessage.getUser().getName(), 
                groupMessage.getUser().getPhoto(), 
                groupMessage.getIdGroupMessage(), 
                text, 
                groupMessage.getDate(), 
                groupMessage.getDeleted(), 
                groupMessage.getChatGroupEntity().getIdChatGroup(), 
                groupMessage.getChatGroupEntity().getName()
            );

            messages.add(message);
        }

        return new ResponseEntity<>(new GetAllMessagesResponse(messages, "All the messages were catched!", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<GetAllMessagesResponse> deleteMessage(Long idChat, Long idMessage, Integer limit) {

        var getMessage = groupMessageRepo.findById(idMessage);

        GroupMessage deletedMessage = getMessage.get();

        deletedMessage.setDeleted(true);
        groupMessageRepo.save(deletedMessage);

        ArrayList<MessagesData> messages = new ArrayList<>();

        ArrayList<GroupMessage> groupMessagesRaw = groupMessageRepo.getAllMessagesWithLimit(idChat, limit);

        if (groupMessagesRaw.isEmpty()) {
            return new ResponseEntity<>(new GetAllMessagesResponse(messages, "There are no comments here!", false), HttpStatus.NOT_FOUND);
        }

        for (GroupMessage groupMessage : groupMessagesRaw) {

            String text = "";

            if (groupMessage.getDeleted()) {
                text = "That message was deleted!";
            } else {
                text = groupMessage.getText();
            }
            
            MessagesData message = new MessagesData(
                groupMessage.getUser().getId(), 
                groupMessage.getUser().getName(), 
                groupMessage.getUser().getPhoto(), 
                groupMessage.getIdGroupMessage(), 
                text, 
                groupMessage.getDate(), 
                groupMessage.getDeleted(), 
                groupMessage.getChatGroupEntity().getIdChatGroup(), 
                groupMessage.getChatGroupEntity().getName()
            );

            messages.add(message);
        }

        return new ResponseEntity<>(new GetAllMessagesResponse(messages, "Message successfully deleted!", true), HttpStatus.OK);
    }
}
