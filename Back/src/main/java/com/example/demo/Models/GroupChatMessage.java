package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "tbGroupChatMessage")
public class GroupChatMessage {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idGroupChatMessage;

    @ManyToOne
    @JoinColumn(name= "idGroupMessage", nullable= false)
    private GroupMessage messageEntity;

    @ManyToOne
    @JoinColumn(name= "idChatGroup", nullable= false)
    private ChatGroup groupEntity;

    public Long getIdGroupChatMessage() {
        return idGroupChatMessage;
    }

    public GroupMessage getMessage() {
        return messageEntity;
    }

    public void setMessage(GroupMessage message) {
        this.messageEntity = message;
    }

    public ChatGroup getGroupEntity() {
        return groupEntity;
    }

    public void setGroupEntity(ChatGroup groupEntity) {
        this.groupEntity = groupEntity;
    }
}
