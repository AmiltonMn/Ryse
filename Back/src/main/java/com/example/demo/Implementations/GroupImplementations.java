package com.example.demo.Implementations;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;

import com.example.demo.DTO.GroupDto.CreateGroupData;
import com.example.demo.DTO.GroupDto.GroupGet;
import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;
import com.example.demo.Models.Group;
import com.example.demo.Models.User;
import com.example.demo.Models.UserGroup;
import com.example.demo.Repositories.GroupRepository;
import com.example.demo.Repositories.UserGroupRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.GroupServices;

public class GroupImplementations implements GroupServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    UserGroupRepository userGroupRepo;

    @Autowired
    GroupRepository groupRepo;

    @Override
    public CreateGroupData createGroup(NewGroupData data, Long idUser) {

        var getUser = userRepo.findById(idUser);

        User groupCreator = getUser.get();
        
        if (data.name().isEmpty() || 
        data.date() == null || 
        data.objective().isEmpty() ||
        data.description().isEmpty()
        ) {
            return new CreateGroupData(false, "Enter all fields correctly");
        }

        Group newGroup = new Group();

        newGroup.setUserEntity(groupCreator);
        newGroup.setDate(data.date());
        newGroup.setName(data.name());
        newGroup.setObjective(data.objective());
        newGroup.setDescription(data.description());

        return new CreateGroupData(true, "Group created successfully");
    }

    @Override
    public String deleteGroup(Long idGroup) {
        
        var getGroup = groupRepo.findById(idGroup);

        Group group = getGroup.get();

        groupRepo.delete(group);

        return "The group was successfully deleted!";
    }

    // ! Fazer depois a função de atualização de um grupo!

    @Override
    public String updateGroup(Long idGroup, UpdateGroupData data) {
        return null;
    }

    @Override
    public String addPersonToGroup(Long idUser, Long idGroup) {

        var getUser = userRepo.findById(idUser);
        var getGroup = groupRepo.findById(idGroup);

        User userToGroup = getUser.get();
        Group group = getGroup.get();

        UserGroup newUserGroup = new UserGroup();

        newUserGroup.setGroup(group);
        newUserGroup.setUser(userToGroup);

        userGroupRepo.save(newUserGroup);

        return "User" + userToGroup.getName() + "is now on the group!";
    }

    @Override
    public ArrayList<GroupGet> getGroupsPageable(Long idUser, Integer page, Integer limit) {
        
        var results = userGroupRepo.findByUserId(idUser, PageRequest.of(page, limit));

        ArrayList<GroupGet> groupsList = new ArrayList<>();

        for (int i = 0; i < results.size(); i++) {
            groupsList.add(new GroupGet(results.get(i).getGroup().getName(), results.get(i).getGroup().getDescription(), results.get(i).getGroup().getObjective(), results.get(i).getGroup().getDate()));
        }

        System.out.println(groupsList);

        return groupsList;
    }
    
}
