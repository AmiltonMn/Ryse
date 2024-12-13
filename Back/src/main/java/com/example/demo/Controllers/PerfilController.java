package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.UserDTO.UserInfoReturn;
import com.example.demo.Services.AreasOfInterestServices;
import com.example.demo.Services.HardSkillService;
import com.example.demo.Services.UserServices;


@RestController
@RequestMapping("/perfil")
public class PerfilController {

    @Autowired
    UserServices userServices;

    @Autowired
    HardSkillService hardSkillService;

    @Autowired
    AreasOfInterestServices areasOfInterestServices;

 
    @GetMapping
    public ResponseEntity<UserInfoReturn> getMethodName(@RequestAttribute("token") Token token) {
        UserInfoReturn info = new UserInfoReturn(userServices.getPerfilData(token.getId()), hardSkillService.getAllHardSkill(), hardSkillService.getAllHardSkillUser(token.getId()), areasOfInterestServices.getAllAreasByUser(token.getId()).areas());
        return new ResponseEntity<>(info, HttpStatus.OK);
    }
    

}
