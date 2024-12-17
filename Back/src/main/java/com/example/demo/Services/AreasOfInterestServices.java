package com.example.demo.Services;

import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.AreasOfInterestDto.AreasOfInterestResponse;

public interface AreasOfInterestServices {
    AreasOfInterestResponse getAllAreasByUser(Long idUser);
    ResponseEntity<AreasOfInterestResponse> newAreaOfInterest(String text, Long idUser);
    ResponseEntity<AreasOfInterestResponse> deleteAreaOfInterest(Long idUser, Long idArea);
}
