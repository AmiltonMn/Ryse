package com.example.demo.Services;

public interface HardSkillService {
    String createSkill(String name);
    boolean deleteHardSkill(Long idSkill);
    boolean addHardSkillToUser(Long idUser, Long idSkill);
    boolean deleteHardSkillUser(Long idUser, Long idSkill);
}
