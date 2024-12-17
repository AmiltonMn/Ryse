package com.example.demo.Implementations;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.DTO.AreasOfInterestDto.AreaOfInterestData;
import com.example.demo.DTO.AreasOfInterestDto.AreasOfInterestResponse;
import com.example.demo.Models.AreasOfInterest;
import com.example.demo.Models.User;
import com.example.demo.Repositories.AreasOfInterestRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.AreasOfInterestServices;

public class AreaOfInteresstImplementations implements AreasOfInterestServices {

    @Autowired
    AreasOfInterestRepository areasRepo;

    @Autowired
    UserRepository userRepo;

    
        @Override
        public AreasOfInterestResponse getAllAreasByUser(Long idUser) {
            ArrayList<AreasOfInterest> areasRaw = areasRepo.getAllByIdUser(idUser);
            ArrayList<AreaOfInterestData> areas = new ArrayList<>();
    
            for (AreasOfInterest areasOfInterest : areasRaw) {
                AreaOfInterestData area = new AreaOfInterestData(areasOfInterest.getText(), areasOfInterest.getIdAreaOfInterest());
    
                areas.add(area);
            }
    
            if (areas.isEmpty()) {
                return new AreasOfInterestResponse(areas, "You don't have any areas of interest!", true);
            }
    
            return new AreasOfInterestResponse(areas, "Your areas of interest are here!", true);
        }


    @Override
    public ResponseEntity<AreasOfInterestResponse> newAreaOfInterest(String text, Long idUser) {

        ArrayList<AreasOfInterest> validationByName = areasRepo.getByText(text);

        if (!validationByName.isEmpty()) {
            return new ResponseEntity<>( new AreasOfInterestResponse(null, "You can't have Areas of Interest with the same name", false), HttpStatus.OK);
        }

        if (text.isEmpty()) {
            return new ResponseEntity<>(new AreasOfInterestResponse(null, "Please put a text to your Area of Interest!", false), HttpStatus.OK);
        }

        ArrayList<AreasOfInterest> areasRaw = areasRepo.getAllByIdUser(idUser);
        ArrayList<AreaOfInterestData> areas = new ArrayList<>();

        for (AreasOfInterest areasOfInterest : areasRaw) {
            AreaOfInterestData area = new AreaOfInterestData(areasOfInterest.getText(), areasOfInterest.getIdAreaOfInterest());

            areas.add(area);
        }

        if (areas.size() >= 5) {
            return new ResponseEntity<>(new AreasOfInterestResponse(areas, "You can't have more than 5 areas of interest!", false), HttpStatus.BAD_REQUEST);
        }
        
        AreasOfInterest newArea = new AreasOfInterest();
        User user = userRepo.findById(idUser).get();

        newArea.setText(text);
        newArea.setUserEntity(user);

        areasRepo.save(newArea);

        areas.clear();

        ArrayList<AreasOfInterest> areasRaw2 = areasRepo.getAllByIdUser(idUser);

        for (AreasOfInterest areasOfInterest : areasRaw2) {
            AreaOfInterestData area = new AreaOfInterestData(areasOfInterest.getText(), areasOfInterest.getIdAreaOfInterest());

            areas.add(area);
        }
        return new ResponseEntity<>(new AreasOfInterestResponse(areas, "New area successfully gotten!", true), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<AreasOfInterestResponse> deleteAreaOfInterest(Long idUser, Long idArea) {

        AreasOfInterest deleteArea = areasRepo.findById(idArea).get();

        areasRepo.delete(deleteArea);

        ArrayList<AreasOfInterest> areasRaw = areasRepo.getAllByIdUser(idUser);
        ArrayList<AreaOfInterestData> areas = new ArrayList<>();

        for (AreasOfInterest areasOfInterest : areasRaw) {
            AreaOfInterestData area = new AreaOfInterestData(areasOfInterest.getText(), areasOfInterest.getIdAreaOfInterest());

            areas.add(area);
        }

        return new ResponseEntity<>(new AreasOfInterestResponse(areas, "Area successfully deleted!", true), HttpStatus.OK);
    }
    
}