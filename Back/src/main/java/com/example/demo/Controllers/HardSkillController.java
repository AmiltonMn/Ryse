package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.HardSkillDTO.HardSkillName;
import com.example.demo.DTO.HardSkillDTO.HardSkillReturn;
import com.example.demo.DTO.HardSkillDTO.addSkillUser;
import com.example.demo.Models.HardSkill;
import com.example.demo.Services.HardSkillService;

@RestController
@RequestMapping("/hardSkill")
public class HardSkillController {

    @Autowired
    HardSkillService hardSkillService;

    @PostMapping
    public ResponseEntity<HardSkillReturn> createHardSkill(@RequestBody HardSkillName data) {
        System.err.println("entrou");
        if (data.name().isEmpty())
            return new ResponseEntity<>(new HardSkillReturn("Write a name for the skill", false), HttpStatus.NO_CONTENT);

        var response = hardSkillService.createSkill(data.name());
        return response;
    }

    @PostMapping("/user")
    public ResponseEntity<HardSkillReturn> postMethodName(@RequestBody addSkillUser data) {

        var response = hardSkillService.addHardSkillToUser(data.idUser(), data.idHardSkill());

        return response;
    }

    @DeleteMapping("/{idSkill}")
    public ResponseEntity<HardSkillReturn> deleteHardSkill(@PathVariable Long idSkill) {

        var response = hardSkillService.deleteHardSkill(idSkill);

        return response;
    }

    @DeleteMapping("/{idUser}/{idSkill}")
    public ResponseEntity<HardSkillReturn> deleteHardSkillfromUser(@PathVariable Long idUser, @PathVariable Long idSkill) {

        var response = hardSkillService.deleteHardSkillUser(idUser, idSkill);

        return response;
    }

    @GetMapping
    public ResponseEntity<List<HardSkill>> getHardSkill() {
        return new ResponseEntity<>(hardSkillService.getAllHardSkill(), HttpStatus.OK);
    }

    @GetMapping("/{idUser}")
    public ResponseEntity<List<String>> getHardSkillUser(@PathVariable Long idUser) {
        return new ResponseEntity<>(hardSkillService.getAllHardSkillUser(idUser), HttpStatus.OK);
    }

}
