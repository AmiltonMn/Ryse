package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.TopicDTO.RegisterTopicReturn;
import com.example.demo.DTO.TopicDTO.TopicCreate;
import com.example.demo.DTO.TopicDTO.TopicDTO;

public interface TopicService {
    
    List<TopicDTO> getTopics(Integer page, Integer size);
    RegisterTopicReturn createTopic(TopicCreate data);
}
