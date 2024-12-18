package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.TopicChatDTO.CreateChat;
import com.example.demo.DTO.TopicChatDTO.CreateMessage;
import com.example.demo.DTO.TopicChatDTO.GetTopicChatMessagesResponse;
import com.example.demo.DTO.TopicChatDTO.GetTopicChats;
import com.example.demo.DTO.TopicChatDTO.TopicChatMessageResponse;
import com.example.demo.DTO.TopicChatDTO.TopicChatReturn;
import com.example.demo.DTO.TopicChatDTO.TopicChatUpdate;
import com.example.demo.DTO.TopicChatDTO.TopicMessagesData;
import com.example.demo.DTO.UserDTO.UserData;
import com.example.demo.Models.TopicChat;
import com.example.demo.Models.TopicMessage;
import com.example.demo.Repositories.TopicChatRepository;
import com.example.demo.Repositories.TopicMessagesRepository;
import com.example.demo.Repositories.TopicRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.TopicChatServices;

public class TopicChatImplementations implements TopicChatServices {

    @Autowired
    TopicChatRepository topicChatRepo;

    @Autowired
    TopicMessagesRepository topicMessageRepo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    TopicRepository topicRepo;

    @Override
    public TopicChatReturn createTopicChat(CreateChat data) {

        var exist = topicChatRepo.findChatWithName(data.name());

        if (!exist.isEmpty()) {
            return new TopicChatReturn("Already exist a chat with this name on the topic", false);
        }
        var topic = topicRepo.findById(data.idTopic()).get();
        var user = userRepo.findById(data.idUser()).get();

        String now = LocalDateTime.now().toString();

        TopicChat newTopicChat = new TopicChat();
        newTopicChat.setName(data.name());
        newTopicChat.setTopic(topic);
        newTopicChat.setUser(user);
        newTopicChat.setDate(now);

        topicChatRepo.save(newTopicChat);

        return new TopicChatReturn("Created chat with sucess", true);
    }

    @Override
    public TopicChatMessageResponse createTopicChatMessage(CreateMessage data) {

        var user = userRepo.findById(data.idUser()).get();
        var topicChat = topicChatRepo.findById(data.idChatTopic()).get();

        String now = LocalDateTime.now().toString();

        TopicMessage newMessage = new TopicMessage();

        newMessage.setChat(topicChat);
        newMessage.setUser(user);
        newMessage.setText(data.text());
        newMessage.setDate(now);
        newMessage.setDeleted(false);

        topicMessageRepo.save(newMessage);

        ArrayList<TopicMessage> topicChatMessagesRaw = topicMessageRepo.findMessagesWithChat(data.idChatTopic());
        ArrayList<TopicMessagesData> messages = new ArrayList<>();

        for (TopicMessage topicMessage : topicChatMessagesRaw) {
            
            messages.add(
                new TopicMessagesData(
                    topicMessage.getText(), 
                    topicMessage.getDate(), 
                    topicMessage.getDeleted(), 
                    new UserData(
                        topicMessage.getUser().getUsername(), 
                        topicMessage.getUser().getName(), 
                        topicMessage.getUser().getPhoto(), 
                        topicMessage.getUser().getUserState()
                    )
                )
            );
        }

        return new TopicChatMessageResponse(messages, "Created Message with sucess", true);
    }

    @Override
    public TopicChatReturn deleteTopicChat(Long idTopicChat, Long idUser) {

        if (!Objects.equals(topicChatRepo.findById(idTopicChat).get().getUser().getId(), idUser)) {
            return new TopicChatReturn("You are not the admin of the chat", false);
        }
        topicChatRepo.deleteById(idTopicChat);
        return new TopicChatReturn("deleted chat with sucess", true);
    }

    @Override
    public TopicChatReturn updateNameChatTopic(TopicChatUpdate data) {

        if (!Objects.equals(topicChatRepo.findById(data.idTopicChat()).get().getUser().getId(), data.idUser())) {
            return new TopicChatReturn("You are not the admin of the chat", false);
        }

        var topicChat =  topicChatRepo.findById(data.idTopicChat()).get();

        topicChat.setName(data.name());

        topicChatRepo.save(topicChat);
        return new TopicChatReturn("updated name chat with sucess", true);
    }

    @Override
    public TopicChatMessageResponse inativeMessageTopicChat(Long idTopicChatMessage, Long idUser) {

        if (!Objects.equals(topicMessageRepo.findById(idTopicChatMessage).get().getUser().getId(),idUser)) {
            return new TopicChatMessageResponse(null,  "You are not the author of the message", false);
        }

        var message = topicMessageRepo.findById(idTopicChatMessage).get();
        message.setDeleted(true);
        topicMessageRepo.save(message);

        ArrayList<TopicMessage> topicChatMessagesRaw = topicMessageRepo.findMessagesWithChat(topicMessageRepo.findById(idUser).get().getChat().getIdTopicChat());
        ArrayList<TopicMessagesData> messages = new ArrayList<>();

        for (TopicMessage topicMessage : topicChatMessagesRaw) {
            
            messages.add(
                new TopicMessagesData(
                    topicMessage.getText(), 
                    topicMessage.getDate(), 
                    topicMessage.getDeleted(), 
                    new UserData(
                        topicMessage.getUser().getUsername(), 
                        topicMessage.getUser().getName(), 
                        topicMessage.getUser().getPhoto(), 
                        topicMessage.getUser().getUserState()
                    )
                )
            );
        }

        return new TopicChatMessageResponse(messages, "inativated message with sucess", true);
    }

    @Override
    public ArrayList<GetTopicChats> getTopicChats(Long idTopic) {

        ArrayList<TopicChat> chatsRaw = topicChatRepo.findChatWithTopic(idTopic);
        ArrayList<GetTopicChats> chats = new ArrayList<>();

        for (TopicChat topicChat : chatsRaw) {
            
            chats.add(new GetTopicChats(
                topicChat.getName(), 
                topicChat.getDate(), 
                new UserData(
                        topicChat.getUser().getUsername(), 
                        topicChat.getUser().getName(), 
                        topicChat.getUser().getPhoto(), 
                        topicChat.getUser().getUserState()
                    )
                )
            );
        }

        return chats;
    }

    @Override
    public GetTopicChatMessagesResponse getTopicMessage(Long idTopicChat) {

        ArrayList<TopicMessage> topicChatMessagesRaw = topicMessageRepo.findMessagesWithChat(idTopicChat);
        ArrayList<TopicMessagesData> messages = new ArrayList<>();
        TopicChat topicChat = topicChatRepo.findById(idTopicChat).get();

        for (TopicMessage topicMessage : topicChatMessagesRaw) {
            
            messages.add(
                new TopicMessagesData(
                    topicMessage.getText(), 
                    topicMessage.getDate(), 
                    topicMessage.getDeleted(), 
                    new UserData(
                        topicMessage.getUser().getUsername(), 
                        topicMessage.getUser().getName(), 
                        topicMessage.getUser().getPhoto(), 
                        topicMessage.getUser().getUserState()
                    )
                )
            );
        }

        return new GetTopicChatMessagesResponse(messages, topicChat.getName(), true);
    }

}
