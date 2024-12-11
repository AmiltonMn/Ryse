package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.Token;
import com.example.demo.DTO.AreasOfInterestDto.AreasOfInterestResponse;
import com.example.demo.DTO.AreasOfInterestDto.NewAreaData;
import com.example.demo.Services.AreasOfInterestServices;

@RestController
@RequestMapping("profile/areaOfInterest")
public class AreasOfInterestController {

    @Autowired
    AreasOfInterestServices areaService;
    
    @PostMapping("/newArea")
    public ResponseEntity<AreasOfInterestResponse> newAreaOfInterest(@RequestAttribute("token") Token token, @RequestBody NewAreaData data) {

        ResponseEntity<AreasOfInterestResponse> response = areaService.newAreaOfInterest(data.text(), token.getId());

        return response;
    }

    @GetMapping
    public ResponseEntity<AreasOfInterestResponse> getAllAreasOfUser(@RequestAttribute("token") Token token) {

        ResponseEntity<AreasOfInterestResponse> response = areaService.getAllAreasByUser(token.getId());

        return response;
    }

    @DeleteMapping("/{idArea}")
    public ResponseEntity<AreasOfInterestResponse> deleteAreaOfInterest(@RequestAttribute("token") Token token, @PathVariable("idArea") Long idArea) {

        ResponseEntity<AreasOfInterestResponse> response = areaService.deleteAreaOfInterest(token.getId(), idArea);

        return response;
    }
}
