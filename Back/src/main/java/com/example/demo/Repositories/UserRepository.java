package com.example.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByName(String name);

    Optional<User> findByedv(String edv);

        @Modifying
    @Transactional
    @Query(value = "Update tb_user set photo = :Photo WHERE id_user = :idUser", nativeQuery = true)
    void updatePhoto(@Param("Photo") String Photo,@Param("idUser")Long idUser);

    @Query(value = "Select * from tb_user WHERE id_user = :idUser", nativeQuery = true)
    User getUser(@Param("idUser") Long idUser);

}
