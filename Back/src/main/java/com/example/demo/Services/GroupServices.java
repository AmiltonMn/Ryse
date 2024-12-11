package com.example.demo.Services;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.GroupDto.CreateGroupData;
import com.example.demo.DTO.GroupDto.GroupGet;
import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;
import com.example.demo.DTO.GroupDto.getGroupAll;

public interface GroupServices {
    ResponseEntity<CreateGroupData> createGroup(NewGroupData data, Long idUser);
    ResponseEntity<CreateGroupData> deleteGroup(Long idGroup);
    ResponseEntity<CreateGroupData> updateGroup(UpdateGroupData data);
    ResponseEntity<CreateGroupData> addPersonToGroup(Long idUser, Long idGroup);
    ResponseEntity<CreateGroupData> deletePersonOnGroup(Long idUser, Long idGroup);
    ArrayList<getGroupAll> getGroupsPageable(Long idUser, Integer page, Integer limit);
    ResponseEntity<GroupGet> getGroupInfo(Long idUser, Long idGroup);
}
