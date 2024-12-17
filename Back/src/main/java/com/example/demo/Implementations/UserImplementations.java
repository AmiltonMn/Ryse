package com.example.demo.Implementations;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.DTO.AreasOfInterestDto.GetAreasOfInterest;
import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.Return;
import com.example.demo.DTO.Token;
import com.example.demo.DTO.UserDTO.UserProfileResponse;
import com.example.demo.JWTCreate;
import com.example.demo.Models.AreasOfInterest;
import com.example.demo.Models.User;
import com.example.demo.Repositories.AreasOfInterestRepository;
import com.example.demo.Repositories.UserHardSkillRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.EncodeServices;
import com.example.demo.Services.UserServices;

public class UserImplementations implements UserServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    EncodeServices encode;

    @Autowired
    UserHardSkillRepository userHardkSkillRepo;

    @Autowired
    AreasOfInterestRepository areasRepo;

    @Override
    public Return register(RegisterData data) {

        if (!checkPassword(data.password()))
            return new Return("Password does not meet the criteria", false);

        if (!userRepo.findByEmail(data.email()).isEmpty())
            return new Return("Already have a user with this email", false);

        if (!userRepo.findByUsername(data.username()).isEmpty())
            return new Return("Already have a user with this username", false);

        if (!userRepo.findByedv(data.name()).isEmpty())
            return new Return("Already have a user with this EDV", false);

        var encoder = new BCryptPasswordEncoder();

        User newUser = new User();

        newUser.setName(data.name());
        newUser.setEmail(data.email());
        newUser.setUsername(data.username());
        newUser.setEdv(data.EDV());
        newUser.setPassword(encoder.encode(data.password()));
        newUser.setUserState("Student");

        userRepo.save(newUser);

        return new Return("User created with sucess", true);

    }

    @Override
    public Return Login(LoginData data) {

        if (data.email().isEmpty() || data.password().isEmpty())
            return new Return("All fields must be filled in", false);

        Optional<User> userOptional = userRepo.findByEmail(data.email());

        if (userOptional.isEmpty())
            return new Return("User not found", false);

        User user = userOptional.get();

        if (!encode.validate(data.password(), user.getPassword()))
            return new Return("Password incorrect", false);

        Token token = new Token();

        token.setId(user.getId());
        token.setRole(user.getUserState());

        JWTCreate jwtCreate = new JWTCreate();

        String jwt = "Bearer " + jwtCreate.get(token);

        return new Return(jwt, true);
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

    @Override
    public UserProfileResponse getUserProfile(Long idUser) {

        User user = userRepo.findById(idUser).get();
        ArrayList<String> hardSkills = userHardkSkillRepo.getHardSkillUser(idUser);
        ArrayList<AreasOfInterest> areasOfInterestsRaw = areasRepo.getAllByIdUser(idUser);

        ArrayList<GetAreasOfInterest> areasOfInterest = new ArrayList<>();

        for (AreasOfInterest areaOfInterest : areasOfInterestsRaw) {
            
            areasOfInterest.add(new GetAreasOfInterest(areaOfInterest.getText()));
        }

        
        UserProfileResponse userProfileData = new UserProfileResponse(user.getUsername(), 
                                                                      user.getName(), 
                                                                      user.getPhoto(), 
                                                                      user.getCoverPhoto(), 
                                                                      user.getBio(), 
                                                                      areasOfInterest, 
                                                                      hardSkills,
                                                                      true);

        return userProfileData;
    }

}
