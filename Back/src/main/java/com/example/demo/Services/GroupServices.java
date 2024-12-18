package com.example.demo.Services;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.GroupDTO.CreateGroupData;
import com.example.demo.DTO.GroupDTO.GroupGet;
import com.example.demo.DTO.GroupDTO.NewGroupData;
import com.example.demo.DTO.GroupDTO.UpdateGroupData;
import com.example.demo.DTO.GroupDTO.getGroupAll;
import com.example.demo.Models.User;

public interface GroupServices {
    ResponseEntity<CreateGroupData> createGroup(NewGroupData data, Long idUser);
    ResponseEntity<CreateGroupData> deleteGroup(Long idGroup);
    ResponseEntity<CreateGroupData> updateGroup(UpdateGroupData data);
    ResponseEntity<CreateGroupData> addPersonToGroup(Long idUser, Long idGroup);
    ResponseEntity<CreateGroupData> deletePersonOnGroup(Long idUser, Long idGroup);
    ArrayList<getGroupAll> getGroupsPageable(Long idUser, Integer page, Integer limit, String query);
    ResponseEntity<GroupGet> getGroupInfo(Long idUser, Long idGroup);
    ArrayList<User> getAllUserInGroup(Long idGroup);
}
