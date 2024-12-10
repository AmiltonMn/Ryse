package com.example.demo.Implementations;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.TopicDTO.RegisterTopicReturn;
import com.example.demo.DTO.TopicDTO.TopicCreate;
import com.example.demo.DTO.TopicDTO.TopicDTO;
import com.example.demo.Models.Topic;
import com.example.demo.Models.User;
import com.example.demo.Repositories.TopicRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.TopicService;

public class TopicImplementation implements TopicService {

    @Autowired
    TopicRepository topicRepo;

    @Autowired
    UserRepository userRepo;
    
    @Override
    public List<TopicDTO> getTopics(Integer page, Integer size) {
        
        List<Topic> topics = topicRepo.findQuestionsWithPagination(((page-1)*size), size);

        List<TopicDTO> topicsReturn = new ArrayList<>();

        for(Topic topic : topics){
            topicsReturn.add(new TopicDTO(topic.getName(), topic.getDate(), topic.getUser().getId()));
        }

        return topicsReturn;
    }

    @Override
    public RegisterTopicReturn createTopic(TopicCreate data) {
        
        var topic = topicRepo.findByName(data.name());

        if(topic.isPresent())
            return new RegisterTopicReturn("This name is already in use", false);

        Optional<User> user = userRepo.findById(data.idUser());

        Topic newTopic = new Topic();


        String now = LocalDateTime.now().toString();

        newTopic.setName(data.name());
        newTopic.setDate(now);
        newTopic.setUser(user.get());

        topicRepo.save(newTopic);

        return new RegisterTopicReturn("Topic created with sucess!", true);
    }
    
}
