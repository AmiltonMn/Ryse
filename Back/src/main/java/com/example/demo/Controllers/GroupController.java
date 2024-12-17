package com.example.demo.Controllers;

import java.util.ArrayList;

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

import com.example.demo.DTO.GroupDto.CreateGroupData;
import com.example.demo.DTO.GroupDto.GetGroupsResponse;
import com.example.demo.DTO.GroupDto.GroupGet;
import com.example.demo.DTO.GroupDto.NewGroupData;
import com.example.demo.DTO.GroupDto.UpdateGroupData;
import com.example.demo.DTO.GroupDto.addUserGroup;
import com.example.demo.DTO.UserDTO.GetUsersData;
import com.example.demo.DTO.UserDTO.UserData;
import com.example.demo.Models.User;
import com.example.demo.Repositories.GroupRepository;
import com.example.demo.DTO.Token;
import com.example.demo.Services.GroupServices;

@RestController
@RequestMapping("/group")
public class GroupController {

    @Autowired
    GroupServices groupService;
    
    @Autowired
    GroupRepository groupRepo;

    @PostMapping
    public ResponseEntity<CreateGroupData> createNewGroup(@RequestBody NewGroupData data, @RequestAttribute("token") Token token) {

        System.out.println(data);

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
    public ResponseEntity<GetGroupsResponse> getAllGroups(@RequestAttribute("token") Token token, @RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "") String query) {

        Integer groupsCount = groupRepo.getGroupsCount(token.getId());

        Double pages = Math.floor(groupsCount / 9);

        System.out.println(pages);

        GetGroupsResponse response = new GetGroupsResponse(groupService.getGroupsPageable(token.getId(), page - 1, 9, query), "All of the user group are on the list!", pages);
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{idGroup}")
    public ResponseEntity<GroupGet> getGroup(@RequestAttribute("token") Token token,@PathVariable Long idGroup) {

        var response = groupService.getGroupInfo(token.getId(), idGroup);
        return response;
    }

    @PatchMapping
    public ResponseEntity<CreateGroupData> updateInfoGroup(@RequestAttribute("token") Token token,@RequestBody UpdateGroupData data) {

        var response = groupService.updateGroup(data);
        return response;
    }

    @GetMapping("/{idGroup}/users")
    public ResponseEntity<GetUsersData> getAllUsersInGroup(@PathVariable("idGroup") Long idGroup) {

        ArrayList<User> usersRaw = groupService.getAllUserInGroup(idGroup);

        ArrayList<UserData> users = new ArrayList<>();

        for (User user : usersRaw) {
            
            UserData userInGroup = new UserData(user.getUsername(), user.getName(), user.getPhoto(), user.getUserState());

            users.add(userInGroup);
        }

        if (users.isEmpty()) {
            return new ResponseEntity<>(new GetUsersData(null, false), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new GetUsersData(users, true), HttpStatus.OK);
    }
}
