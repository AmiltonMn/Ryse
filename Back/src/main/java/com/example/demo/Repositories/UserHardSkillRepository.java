package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.UserHardSkill;

public interface UserHardSkillRepository extends JpaRepository<UserHardSkill, Long> {
    
}
