package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.GroupDto.CreateGroupData;
import com.example.demo.DTO.GroupDto.GroupGet;
import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;
import com.example.demo.DTO.GroupDto.getGroupAll;
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
    public ResponseEntity<CreateGroupData> createGroup(NewGroupData data, Long idUser) {

        var getUser = userRepo.findById(idUser).get();

        if (data.name() == "" ||
            data.objective() == "" ||
            data.description() == "") {
            System.out.println("Estao nulos os nossos queridos");
            return new ResponseEntity<>(new CreateGroupData("Enter all fields correctly", false),
                    HttpStatus.NO_CONTENT);
        }

        Group newGroup = new Group();
        UserGroup newUserGroup = new UserGroup();
        String now = LocalDateTime.now().toString();

        newGroup.setUserEntity(getUser);
        newGroup.setDate(now);
        newGroup.setName(data.name());
        newGroup.setObjective(data.objective());
        newGroup.setDescription(data.description());
        groupRepo.save(newGroup);

        newUserGroup.setGroup(newGroup);
        newUserGroup.setUser(getUser);
        userGroupRepo.save(newUserGroup);

        System.out.println("O grupo foi criado!");

        return new ResponseEntity<>(new CreateGroupData("Group created successfully", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<CreateGroupData> deleteGroup(Long idGroup) {
        groupRepo.deleteById(idGroup);
        return new ResponseEntity<>(new CreateGroupData("The group was successfully deleted!", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<CreateGroupData> updateGroup(UpdateGroupData data) {
        groupRepo.updateGroup(data.newDescription(), data.newName(), data.newObjective(), data.idGroup());
        return new ResponseEntity<>(new CreateGroupData("The group was successfully updated!", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<CreateGroupData> addPersonToGroup(Long idUser, Long idGroup) {

        var getUser = userRepo.findById(idUser);
        var getGroup = groupRepo.findById(idGroup);

        User userToGroup = getUser.get();
        Group group = getGroup.get();

        UserGroup newUserGroup = new UserGroup();

        newUserGroup.setGroup(group);
        newUserGroup.setUser(userToGroup);

        userGroupRepo.save(newUserGroup);

        return new ResponseEntity<>(new CreateGroupData("User" + userToGroup.getName() + "is now on the group!", true),
                HttpStatus.OK);
    }

    @Override
    public ResponseEntity<CreateGroupData> deletePersonOnGroup(Long idUser, Long idGroup) {
        userGroupRepo.deleteUserGroup(idGroup, idUser);
        return new ResponseEntity<>(new CreateGroupData("User was successfully removed!", true), HttpStatus.OK);
    }

    @Override
    public ArrayList<getGroupAll> getGroupsPageable(Long idUser, Integer page, Integer limit, String query) {

        var results = groupRepo.findByNameContains(query, PageRequest.of(page, limit));

        System.out.println(results);

        ArrayList<getGroupAll> groupsList = new ArrayList<>();

        for (int i = 0; i < results.size(); i++) {
            groupsList.add(new getGroupAll(
                    results.get(i).getName(),
                    results.get(i).getDescription(),
                    results.get(i).getObjective()));
        }

        return groupsList;
    }

    @Override
    public ResponseEntity<GroupGet> getGroupInfo(Long idUser, Long idGroup) {
        var search = groupRepo.findById(idGroup);
        
        if (search.isEmpty())
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);

        var group = search.get();
        return new ResponseEntity<>(new GroupGet(group.getName(), group.getDescription(), group.getObjective(),
                Objects.equals(group.getUserEntity().getId(), idUser)), HttpStatus.OK);
    }

    @Override
    public ArrayList<User> getAllUserInGroup(Long idGroup) {
        
        ArrayList<User> users = userGroupRepo.findUsersInGroup(idGroup);

        if (users.isEmpty()) {
            return null;
        }

        return users;
    }
}
