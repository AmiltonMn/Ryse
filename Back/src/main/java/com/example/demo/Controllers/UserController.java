package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.LoginReturn;
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

    @PostMapping("/login")
    public ResponseEntity<LoginReturn> Login(@RequestBody LoginData data){

        var response = userServices.Login(data);

        return response.sucess()? 
            new ResponseEntity<>(response, HttpStatus.OK) : 
            new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
