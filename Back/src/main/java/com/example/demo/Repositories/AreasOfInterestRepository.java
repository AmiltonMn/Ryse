package com.example.demo.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.AreasOfInterest;

public interface AreasOfInterestRepository extends JpaRepository<AreasOfInterest, Long> {

    @Query(value = "SELECT * FROM tb_area_of_interest ai WHERE id_user = :idUser", nativeQuery = true)
    ArrayList<AreasOfInterest> getAllByIdUser(@Param("idUser") Long idUser);

    ArrayList<AreasOfInterest> getByText(String text);
}
