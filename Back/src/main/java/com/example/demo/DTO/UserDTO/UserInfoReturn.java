package com.example.demo.DTO.UserDTO;

import java.util.List;

import com.example.demo.Models.HardSkill;

public record UserInfoReturn(
    perfilInfo info,
    List<HardSkill> HardSkills,
    List<String> HardSkillUser
) {
    
}
