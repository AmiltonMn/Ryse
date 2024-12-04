package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Models.HardSkill;
import com.example.demo.Models.UserHardSkill;

public interface UserHardSkillRepository extends JpaRepository<UserHardSkill, Long> {

    @Query(value = "DELETE FROM tb_user_hard_skill WHERE id_hard_skill = :idHardSkill AND id_user = idUser", nativeQuery = true)
    boolean excludeHardSkill(@Param("idHardSkill") Long idHardSkill,@Param("idUser") Long idUser);

    @Query(value = "Select h.name from tb_hard_skill h inner join tb_user_hard_skill a on h.id_hard_skill = a.id_hard_skill WHERE a.id_user = :idUser", nativeQuery = true)
    List<HardSkill> getHardSkillUser(@Param("idUser") Long idUser);
}
