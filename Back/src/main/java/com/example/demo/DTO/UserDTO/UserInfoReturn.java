package com.example.demo.DTO.UserDTO;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.DTO.AreasOfInterestDto.AreaOfInterestData;
import com.example.demo.Models.AreasOfInterest;
import com.example.demo.Models.HardSkill;

public record UserInfoReturn(
    perfilInfo info,
    List<HardSkill> HardSkills,
    List<String> HardSkillUser,
    List<AreaOfInterestData> areas
) {
    
}
