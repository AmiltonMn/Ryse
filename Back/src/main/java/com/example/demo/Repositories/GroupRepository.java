package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    List<Group> findByUserId(Long idGroup, PageRequest req);
}
