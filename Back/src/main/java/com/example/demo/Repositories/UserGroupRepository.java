package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Models.UserGroup;

@Repository
public interface UserGroupRepository extends JpaRepository<UserGroup, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM tb_user_group WHERE id_group = :idGroup AND id_user = :idUser", nativeQuery = true)
    void deleteUserGroup(@Param("idGroup") Long idGroup, @Param("idUser") Long idUser);

    @Query(value = "SELECT * FROM tb_user_group WHERE id_user = :idUser ORDER BY id_user_group OFFSET :offset ROWS FETCH NEXT :limit ROWS ONLY", nativeQuery = true)
    List<UserGroup> findUserGroupsWithPagination(@Param("idUser") Long idUser,@Param("offset") int offset, @Param("limit") int limit);
}

