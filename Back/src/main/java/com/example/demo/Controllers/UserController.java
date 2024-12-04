package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.RegisterData;
import com.example.demo.Services.UserServices;

@RestController
public class UserController {

    @Autowired
    UserServices userServices;

    @PostMapping("/register")
    public ResponseEntity<String> Register(@RequestBody RegisterData data) {
        System.err.println("entrou");
        String response = userServices.register(data);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
