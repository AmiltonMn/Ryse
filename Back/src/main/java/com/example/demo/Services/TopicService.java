package com.example.demo.Services;

import com.example.demo.DTO.Topic.TopicDTO;

import java.util.List;

import com.example.demo.DTO.Topic.RegisterTopicReturn;
import com.example.demo.DTO.Topic.TopicCreate;

public interface TopicService {
    
    List<TopicDTO> getTopics(Integer page, Integer size);
    RegisterTopicReturn createTopic(TopicCreate data);
}
