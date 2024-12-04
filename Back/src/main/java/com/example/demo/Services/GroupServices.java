package com.example.demo.Services;

import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;

public interface GroupServices {
    String createGroup(NewGroupData data, Long idUser);
    String deleteGroup(Long idGroup);
    String updateGroup(Long idGroup, UpdateGroupData data);
    String addPersonToGroup(Long idUser, Long idGroup);
}
