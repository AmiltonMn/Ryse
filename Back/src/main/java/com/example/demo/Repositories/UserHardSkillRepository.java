package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.UserHardSkill;

public interface UserHardSkillRepository extends JpaRepository<UserHardSkill, Long> {

    @Query(value = "DELETE FROM tb_user_hard_skill WHERE id_hard_skill = :idHardSkill AND id_user = idUser", nativeQuery = true)
    boolean excludeHardSkill(@Param("idHardSkill") Long idHardSkill,@Param("idUser") Long idUser);
}
