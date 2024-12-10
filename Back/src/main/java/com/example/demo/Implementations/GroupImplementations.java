package com.example.demo.Implementations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.GroupDTO.CreateGroupData;
import com.example.demo.DTO.GroupDTO.GroupGet;
import com.example.demo.DTO.GroupDTO.NewGroupData;
import com.example.demo.DTO.GroupDTO.UpdateGroupData;
import com.example.demo.DTO.GroupDTO.getGroupAll;
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

        if (data.name().isEmpty() ||
                data.objective().isEmpty() ||
                data.description().isEmpty()) {
            return new ResponseEntity<>(new CreateGroupData("Enter all fields correctly", false),
                    HttpStatus.NO_CONTENT);
        }

        Group newGroup = new Group();
        String now = LocalDateTime.now().toString();

        newGroup.setUserEntity(getUser);
        newGroup.setDate(now);
        newGroup.setName(data.name());
        newGroup.setObjective(data.objective());
        newGroup.setDescription(data.description());
        groupRepo.save(newGroup);

        return new ResponseEntity<>(new CreateGroupData("Group created successfully", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<CreateGroupData> deleteGroup(Long idGroup) {
        groupRepo.deleteById(idGroup);
        return new ResponseEntity<>(new CreateGroupData("The group was successfully deleted!", true), HttpStatus.OK);
    }

    // ! Fazer depois a função de atualização de um grupo!

    @Override
    public ResponseEntity<CreateGroupData> updateGroup(UpdateGroupData data) {
        groupRepo.updateGroups(data.newDescription(), data.newName(), data.newObjective(), data.idGroup());
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
    public ArrayList<getGroupAll> getGroupsPageable(Long idUser, Integer page, Integer limit) {

        var results = userGroupRepo.findUserGroupsWithPagination(idUser, ((page-1)*limit), limit);

        ArrayList<getGroupAll> groupsList = new ArrayList<>();

        for (int i = 0; i < results.size(); i++) {
            groupsList.add(new getGroupAll(
                    results.get(i).getGroup().getName(),
                    results.get(i).getGroup().getDescription(),
                    results.get(i).getGroup().getObjective()));
        }

        System.out.println(groupsList);

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

}
