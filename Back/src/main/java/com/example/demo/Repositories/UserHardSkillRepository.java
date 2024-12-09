package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Models.UserHardSkill;

@Repository
public interface UserHardSkillRepository extends JpaRepository<UserHardSkill, Long> {


    @Modifying
    @Transactional
    @Query(value = "DELETE FROM tb_user_hard_skill WHERE id_hard_skill = :idHardSkill AND id_user = :idUser", nativeQuery = true)
    void excludeHardSkill(@Param("idHardSkill") Long idHardSkill,@Param("idUser")Long idUser);

    @Query(value = "Select h.name from tb_hard_skill h inner join tb_user_hard_skill a on h.id_hard_skill = a.id_hard_skill WHERE a.id_user = :idUser", nativeQuery = true)
    List<String> getHardSkillUser(@Param("idUser") Long idUser);
}
