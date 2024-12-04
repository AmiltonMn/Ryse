package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.HardSkillDTO.HardSkillName;
import com.example.demo.DTO.HardSkillDTO.addSkillUser;
import com.example.demo.Services.HardSkillService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.demo.Models.HardSkill;

@RestController
@RequestMapping("/hardSkill")
public class HardSkillController {

    @Autowired
    HardSkillService hardSkillService;

    @PostMapping
    public ResponseEntity<String> createHardSkill(@RequestBody HardSkillName data) {
        if (data.name().isEmpty())
            return new ResponseEntity<>("Coloque um nome para o espaço", HttpStatus.NOT_ACCEPTABLE);

        String response = hardSkillService.createSkill(data.name());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<String> postMethodName(@RequestBody addSkillUser data) {

        boolean response = hardSkillService.addHardSkillToUser(data.idUser(), data.idHardSkill());

        if (!response) {
            return new ResponseEntity<>("A tentativa de adicionar falhou", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Adicionado", HttpStatus.OK);
    }

    @DeleteMapping("/{idSkill}")
    public ResponseEntity<String> deleteHardSkill(@PathVariable Long idSkill) {

        boolean response = hardSkillService.deleteHardSkill(idSkill);

        if (!response) {
            return new ResponseEntity<>("A tentativa de deletar falhou", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("deletado", HttpStatus.OK);
    }

    @DeleteMapping("/{idUser}/{idSkill}")
    public ResponseEntity<String> deleteHardSkillfromUser(@PathVariable Long idUser, @PathVariable Long idSkill) {

        boolean response = hardSkillService.deleteHardSkillUser(idUser, idSkill);

        if (!response) {
            return new ResponseEntity<>("A tentativa de deletar falhou", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("deletado", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<HardSkill>> getHardSkill() {
        return new ResponseEntity<>(hardSkillService.getAllHardSkill(), HttpStatus.OK);
    }

    @GetMapping("/{idUser}")
    public ResponseEntity<List<HardSkill>> getHardSkillUser(@PathVariable Long idUser) {
        return new ResponseEntity<>(hardSkillService.getAllHardSkillUser(idUser), HttpStatus.OK);
    }

}
