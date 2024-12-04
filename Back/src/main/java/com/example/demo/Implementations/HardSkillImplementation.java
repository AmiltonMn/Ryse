package com.example.demo.Implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Models.HardSkill;
import com.example.demo.Models.UserHardSkill;
import com.example.demo.Repositories.HardSkillRepository;
import com.example.demo.Repositories.UserHardSkillRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.HardSkillService;

public class HardSkillImplementation implements HardSkillService {

    @Autowired
    HardSkillRepository hardSkillRepo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    UserHardSkillRepository userHardSkillRepo;

    @Override
    public String createSkill(String name) {
        HardSkill newSkill = new HardSkill();
        newSkill.setName(name);
        hardSkillRepo.save(newSkill);
        return "skill criada com sucesso";
    }

    
    @Override
    public boolean deleteHardSkill(Long idSkill) {
        var skill = hardSkillRepo.findById(idSkill);
        if (skill.isEmpty()) {
            return false;
        }
       hardSkillRepo.delete(skill.get());
       return true;
    }
    

    
    @Override
    public boolean addHardSkillToUser(Long idUser, Long idSkill) {
        var user = userRepo.findById(idUser);

        if(user.isEmpty()){
            return false;
        }

        var skill = hardSkillRepo.findById(idSkill);

        UserHardSkill newUserSkill = new UserHardSkill();
        newUserSkill.setHardSkillEntity(skill.get());
        newUserSkill.setUserEntity(user.get());
        userHardSkillRepo.save(newUserSkill);

        return true;

    }

    @Override
    public boolean deleteHardSkillUser(Long idUser, Long idSkill ) {
        var deleted = userHardSkillRepo.excludeHardSkill(idUser, idSkill);
        return deleted;
    }


    @Override
    public List<HardSkill> getAllHardSkill() {
        return hardSkillRepo.findAll();
    }


    @Override
    public List<HardSkill> getAllHardSkillUser(Long idUser) {
       return userHardSkillRepo.getHardSkillUser(idUser);
    }
}
