package com.example.demo.Services;

import java.util.List;

import com.example.demo.Models.HardSkill;

public interface HardSkillService {
    String createSkill(String name);
    boolean deleteHardSkill(Long idSkill);
    boolean addHardSkillToUser(Long idUser, Long idSkill);
    boolean deleteHardSkillUser(Long idUser, Long idSkill);
    List<HardSkill> getAllHardSkill();
    List<HardSkill> getAllHardSkillUser(Long idUser);
}
