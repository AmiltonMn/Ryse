package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.GroupDTO.CreateGroupData;
import com.example.demo.DTO.GroupDTO.GetGroupsResponse;
import com.example.demo.DTO.GroupDTO.GroupGet;
import com.example.demo.DTO.GroupDTO.NewGroupData;
import com.example.demo.DTO.GroupDTO.UpdateGroupData;
import com.example.demo.DTO.GroupDTO.addUserGroup;
import com.example.demo.DTO.Token;
import com.example.demo.Services.GroupServices;

@RestController
@RequestMapping("/group")
public class GroupController {

    @Autowired
    GroupServices groupService;
    
    @PostMapping
    public ResponseEntity<CreateGroupData> createNewGroup(@RequestBody NewGroupData data, @RequestAttribute("token") Token token) {

        var response =  groupService.createGroup(data, token.getId());

        return response;
    }

    @PostMapping("/user")
    public ResponseEntity<CreateGroupData> addPersonGroup(@RequestBody addUserGroup data) {
        var response =  groupService.addPersonToGroup(data.idUser(),data.idGroup());
        return response;
    }


    @DeleteMapping("/{idGroup}")
    public ResponseEntity<CreateGroupData> deleteGroup(@PathVariable Long idGroup) {
        var response =  groupService.deleteGroup(idGroup);
        return response;
    }

    @DeleteMapping("/{idGroup}/{idUser}")
    public ResponseEntity<CreateGroupData> deleteUserfromGroup(@PathVariable Long idGroup, @PathVariable Long idUser) {
        var response =  groupService.deletePersonOnGroup(idUser, idGroup);
        return response;
    }




    @GetMapping
    public ResponseEntity<GetGroupsResponse> getAllGroups(@RequestAttribute("token") Token token, @RequestParam(defaultValue = "1") Integer page) {

        GetGroupsResponse response = new GetGroupsResponse(groupService.getGroupsPageable(token.getId(), page, 9), "All of the user group are on the list!");
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{idGroup}")
    public ResponseEntity<GroupGet> getGroup(@RequestAttribute("token") Token token,@PathVariable Long idGroup) {

        var response = groupService.getGroupInfo(token.getId(), idGroup);
        return response;
    }

    @PatchMapping
    public ResponseEntity<CreateGroupData> updateInfo(@RequestAttribute("token") Token token,@RequestBody UpdateGroupData data) {

        var response = groupService.updateGroup(data);
        return response;
    }
}
