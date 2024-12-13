package com.example.demo.DTO.UserDTO;

import java.util.ArrayList;

import com.example.demo.DTO.AreasOfInterestDto.GetAreasOfInterest;

public record UserProfileResponse(
    String username,
    String name,
    String photo,
    String coverPhoto,
    String bio,
    ArrayList<GetAreasOfInterest> areasOfInterest,
    ArrayList<String> userHardkSkills,
    Boolean result
) {}
