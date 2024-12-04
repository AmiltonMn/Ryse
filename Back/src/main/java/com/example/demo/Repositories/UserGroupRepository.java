package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.UserGroup;

@Repository
public interface UserGroupRepository extends JpaRepository<UserGroup, Long> {

    List<UserGroup> findByUserId(Long idUser, PageRequest req);
}
