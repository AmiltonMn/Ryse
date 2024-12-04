package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.HardSkill;

public interface HardSkillRepository extends  JpaRepository<HardSkill, Long> {
    
}
