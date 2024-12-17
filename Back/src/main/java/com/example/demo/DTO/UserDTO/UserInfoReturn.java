package com.example.demo.DTO.UserDTO;

import java.util.List;

import com.example.demo.DTO.AreasOfInterestDto.AreaOfInterestData;
import com.example.demo.DTO.HardSkillDTO.HardSkillName;

public record UserInfoReturn(
    perfilInfo info,
    List<HardSkillName> HardSkills,
    List<String> HardSkillUser,
    List<AreaOfInterestData> areas
) {
    
}
