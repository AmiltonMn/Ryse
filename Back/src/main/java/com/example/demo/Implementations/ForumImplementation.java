package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.ForumDTO.ForumData;
import com.example.demo.DTO.Return;
import com.example.demo.Models.Forum;
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
    public List<ForumData> getForum(Long idUser, String query, Integer page, Integer size) {

        forumRepo.findForumWithPagination((page -1) * size, size, idUser);
        
        List<ForumData> response = new ArrayList<>();

        return response;
    }

    @Override
    public Return createForum(String forumName, Long idUser) {
        
        var forum = forumRepo.findByName(forumName);

        if(forum.isPresent())
            return new Return("This name is already in use", false);

        Optional<User> user = userRepo.findById(idUser);

        Forum newForum = new Forum();

        newForum.setName(forumName);
        newForum.setDate(LocalDateTime.now().toString());
        newForum.setUser(user.get());

        forumRepo.save(newForum);

        return new Return("Forum created with sucess!", true);
    }
    
}
