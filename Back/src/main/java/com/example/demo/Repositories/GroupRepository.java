package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Models.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE tb_group SET description = :newDescription, name = :newName, objective = :newObjective WHERE id_group = :idGroup", nativeQuery = true)
    void updateGroup(@Param("newDescription") String newDescription, @Param("newName") String newName, @Param("newObjective") String newObjective, @Param("idGroup") Long idGroup);


    @Query(value = "SELECT TOP (:limit) * FROM tb_group WHERE id_user = :idUser", nativeQuery = true)
    List<Group> findGroupsWithPagination(@Param("idUser") Long idUser, @Param("limit") Integer limit);
}

