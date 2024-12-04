package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    
}
