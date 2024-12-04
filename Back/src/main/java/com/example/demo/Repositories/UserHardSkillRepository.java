package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.UserHardSkill;

@Repository
public interface UserHardSkillRepository extends JpaRepository<UserHardSkill, Long> {
    
}
