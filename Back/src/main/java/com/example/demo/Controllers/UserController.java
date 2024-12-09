package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.Return;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.Services.UserServices;

@RestController
public class UserController {

    @Autowired
    UserServices userServices;

    @PostMapping("/register")
    public ResponseEntity<Return> Register(@RequestBody RegisterData data) {

        if (data.EDV().isEmpty() || data.email().isEmpty() || data.name().isEmpty()) {
            return new ResponseEntity<>(new Return("Enter all fields correctly", false), HttpStatus.NO_CONTENT);
        }

        var response = userServices.register(data);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Return> Login(@RequestBody LoginData data) {

        var response = userServices.Login(data);

        return response.result()? 
            new ResponseEntity<>(response, HttpStatus.OK) : 
            new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
