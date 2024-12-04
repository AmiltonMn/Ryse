package com.example.demo.Services;

import java.util.ArrayList;

import com.example.demo.DTO.GroupDto.CreateGroupData;
import com.example.demo.DTO.GroupDto.GroupGet;
import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;

public interface GroupServices {
    CreateGroupData createGroup(NewGroupData data, Long idUser);
    String deleteGroup(Long idGroup);
    String updateGroup(Long idGroup, UpdateGroupData data);
    String addPersonToGroup(Long idUser, Long idGroup);
    ArrayList<GroupGet> getGroupsPageable(Long idUser, Integer page, Integer limit);
}
