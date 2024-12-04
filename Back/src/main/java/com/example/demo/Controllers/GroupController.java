package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.GroupDto.CreateGroupData;
import com.example.demo.DTO.GroupDto.GetGroupsResponse;
import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.Token;
import com.example.demo.Services.GroupServices;

@RestController
public class GroupController {

    @Autowired
    GroupServices groupService;
    
    @PostMapping("/newgroup")
    public ResponseEntity<CreateGroupData> createNewGroup(@RequestBody NewGroupData data, @RequestAttribute("token") Token token) {

        CreateGroupData response =  groupService.createGroup(data, token.getId());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/groups")
    public ResponseEntity<GetGroupsResponse> getAllGroups(@RequestAttribute("token") Token token, @RequestParam(defaultValue = "1") Integer page) {

        GetGroupsResponse response = new GetGroupsResponse(groupService.getGroupsPageable(token.getId(), page, 9), "All of the user group are on the list!");
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
