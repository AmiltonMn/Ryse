package com.example.demo.Implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.HardSkillDTO.HardSkillReturn;
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
    public ResponseEntity<HardSkillReturn> createSkill(String name) {
        HardSkill newSkill = new HardSkill();
        newSkill.setName(name);
        hardSkillRepo.save(newSkill);
        
        return  new ResponseEntity<>(new HardSkillReturn("Skill created with sucess", true), HttpStatus.OK);
    }

    
    @Override
    public ResponseEntity<HardSkillReturn> deleteHardSkill(Long idSkill) {
        var skill = hardSkillRepo.findById(idSkill);
        if (skill.isEmpty()) {
            return  new ResponseEntity<>(new HardSkillReturn("Skill doesn't exist", false), HttpStatus.NO_CONTENT);
        }
       hardSkillRepo.delete(skill.get());
       return new ResponseEntity<>(new HardSkillReturn("Skill deleted with sucess", true), HttpStatus.OK);
    }
    

    
    @Override
    public ResponseEntity<HardSkillReturn> addHardSkillToUser(Long idUser, Long idSkill) {
        var user = userRepo.findById(idUser);

        if(user.isEmpty()){
            return new ResponseEntity<>(new HardSkillReturn("This user doesn't exist", false), HttpStatus.CONFLICT);
        }

        var skill = hardSkillRepo.findById(idSkill);

        UserHardSkill newUserSkill = new UserHardSkill();
        newUserSkill.setHardSkillEntity(skill.get());
        newUserSkill.setUserEntity(user.get());
        userHardSkillRepo.save(newUserSkill);

        return new ResponseEntity<>(new HardSkillReturn("Add skill to user with sucess", true), HttpStatus.OK);

    }

    @Override
    public ResponseEntity<HardSkillReturn> deleteHardSkillUser(Long idUser, Long idSkill ) {
        userHardSkillRepo.excludeHardSkill(idSkill, idUser);
        return new ResponseEntity<>(new HardSkillReturn("User skill deleted with sucess", true), HttpStatus.OK);
    }


    @Override
    public List<HardSkill> getAllHardSkill() {
        return hardSkillRepo.findAll();
    }


    @Override
    public List<String> getAllHardSkillUser(Long idUser) {
       return userHardSkillRepo.getHardSkillUser(idUser);
    }
}
