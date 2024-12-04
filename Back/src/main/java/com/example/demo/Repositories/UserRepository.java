package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
