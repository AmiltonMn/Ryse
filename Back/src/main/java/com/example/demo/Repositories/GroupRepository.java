package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.domain.PageRequest;
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

    List<Group> findByNameContains(String name, PageRequest req);

    @Query(value = "SELECT count(id_group) FROM tb_group WHERE id_user = :idUser", nativeQuery = true)
    Integer getGroupsCount(@Param("idUser") Long idUser);

    @Query(value = "select u.* from tb_user_group ug inner join tb_user u on u.id_user = ug.id_user WHERE ug.id_group = :idGroup", nativeQuery = true)
    List<Object[]> findUsersGroup(@Param("idGroup") Long idGroup);
}

