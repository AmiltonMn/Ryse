package com.example.demo.Services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.HardSkillDTO.HardSkillName;
import com.example.demo.DTO.HardSkillDTO.HardSkillReturn;

public interface HardSkillService {
    ResponseEntity<HardSkillReturn> createSkill(String name);
    ResponseEntity<HardSkillReturn> deleteHardSkill(Long idSkill);
    ResponseEntity<HardSkillReturn> addHardSkillToUser(Long idUser, Long idSkill);
    ResponseEntity<HardSkillReturn> deleteHardSkillUser(Long idUser, Long idSkill);
    List<HardSkillName> getAllHardSkill();
    List<String> getAllHardSkillUser(Long idUser);
}
