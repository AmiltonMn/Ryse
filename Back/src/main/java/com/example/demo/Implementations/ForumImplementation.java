package com.example.demo.Implementations;

import java.time.DateTimeException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;

import com.example.demo.DTO.ForumDTO.RegisterForumReturn;
import com.example.demo.DTO.Topic.RegisterTopicReturn;
import com.example.demo.Models.Forum;
import com.example.demo.Models.Topic;
import com.example.demo.Models.User;
import com.example.demo.Repositories.ForumRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.ForumService;

public class ForumImplementation implements ForumService{

    @Autowired
    UserRepository userRepo;

    @Autowired
    ForumRepository forumRepo;

    @Override
    public String getForum(String query, Integer page, Integer size) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getForum'");
    }

    @Override
    public RegisterForumReturn createForum(String forumName, Long idUser) {
        
        var forum = forumRepo.findByName(forumName);

        if(forum.isPresent())
            return new RegisterForumReturn("This name is already in use", false);

        Optional<User> user = userRepo.findById(idUser);

        Forum newForum = new Forum();

        newForum.setName(forumName);
        newForum.setDate(LocalDateTime.now().toString());
        newForum.setUser(user.get());

        forumRepo.save(newForum);

        return new RegisterForumReturn("Forum created with sucess!", true);
    }
    
}
