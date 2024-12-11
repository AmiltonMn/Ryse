package com.example.demo.Implementations;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.LoginReturn;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.RegisterDTO.RegisterReturn;
import com.example.demo.DTO.Token;
import com.example.demo.JWTCreate;
import com.example.demo.Models.User;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.EncodeServices;
import com.example.demo.Services.UserServices;

public class UserImplementations implements UserServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    EncodeServices encode;

    @Override
    public RegisterReturn register(RegisterData data) {

        if (!checkPassword(data.password()))
            return new RegisterReturn("Password does not meet the criteria", false);

        if (!userRepo.findByEmail(data.email()).isEmpty())
            return new RegisterReturn("Already have a user with this email", false);

        if (!userRepo.findByName(data.name()).isEmpty())
            return new RegisterReturn("Already have a user with this name", false);

        if (!userRepo.findByedv(data.name()).isEmpty())
            return new RegisterReturn("Already have a user with this EDV", false);

        var encoder = new BCryptPasswordEncoder();

        User newUser = new User();

        newUser.setName(data.name());
        newUser.setEmail(data.email());
        newUser.setEdv(data.EDV());
        newUser.setPassword(encoder.encode(data.password()));
        newUser.setUserState("Instrutor");
        userRepo.save(newUser);

        return new RegisterReturn("User created with sucess", true);

    }

    @Override
    public LoginReturn Login(LoginData data) {

        if (data.email().isEmpty() || data.password().isEmpty())
            return new LoginReturn("All fields must be filled in", false);

        Optional<User> userOptional = userRepo.findByEmail(data.email());

        if (userOptional.isEmpty())
            return new LoginReturn("User not found", false);

        User user = userOptional.get();

        if (!encode.validate(data.password(), user.getPassword()))
            return new LoginReturn("Password incorrect", false);

        Token token = new Token();

        token.setId(user.getId());
        token.setRole(user.getUserState());

        JWTCreate jwtCreate = new JWTCreate();

        String jwt = "Bearer " + jwtCreate.get(token);

        return new LoginReturn(jwt, true);
    }

    @Override
    public Boolean checkPassword(String password) {
        if (password.length() < 12) {
            return false;
        }

        if (!password.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).+$")) {
            return false;
        }

        return true;
    }

}
