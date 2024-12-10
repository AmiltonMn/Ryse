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
    void updateGroups(@Param("newDescription") String newDescription, @Param("newName") String newName, @Param("newObjective") String newObjective, @Param("idGroup") Long idGroup);


    @Query(value = "SELECT * FROM tb_group ORDER BY id_group OFFSET :offset ROWS FETCH NEXT :limit ROWS ONLY", nativeQuery = true)
    List<Group> findGroupsWithPagination(@Param("offset") int offset, @Param("limit") int limit);
}

