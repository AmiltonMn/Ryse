package com.example.demo.Implementations;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;
import com.example.demo.Models.Group;
import com.example.demo.Models.User;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.GroupServices;

public class GroupImplementations implements GroupServices {

    @Autowired
    UserRepository userRepo;

    @Override
    public String createGroup(NewGroupData data, Long idUser) {

        var getUser = userRepo.findById(idUser);

        User groupCreator = getUser.get();
        
        if (data.name().isEmpty() || 
        data.date() == null || 
        data.objective().isEmpty() ||
        data.description().isEmpty()
        ) {
            return "Enter all fields correctly!";
        }

        Group newGroup = new Group();

        newGroup.setUserEntity(groupCreator);
        newGroup.setDate(data.date());
        newGroup.setName(data.name());
        newGroup.setObjective(data.objective());
        newGroup.setDescription(data.description());

        return "";
    }

    @Override
    public String deleteGroup(Long idGroup) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteGroup'");
    }

    @Override
    public String updateGroup(Long idGroup, UpdateGroupData data) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateGroup'");
    }

    @Override
    public String addPersonToGroup(Long idUser, Long idGroup) {
        return "";
    }
    
}
