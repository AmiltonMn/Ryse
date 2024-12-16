package com.example.demo.Services;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.Return;
import com.example.demo.DTO.UserDTO.perfilInfo;
import com.example.demo.DTO.UserDTO.perfilLikesReturn;

public interface UserServices {
  Return register(RegisterData data);
  Return Login(LoginData data);
  Boolean checkPassword(String password);
  perfilInfo getPerfilData(Long idUser);
  String updatePhotoPerfil(String photo, Long idUser);
  perfilLikesReturn getLikes(Long idUser);
  String getComentaries(Long idUser);
}
