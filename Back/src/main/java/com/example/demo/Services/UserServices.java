package com.example.demo.Services;

import java.util.List;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.UserDTO.UserProfileResponse;
import com.example.demo.DTO.Return;
import com.example.demo.DTO.UserDTO.AnswerComentarie;
import com.example.demo.DTO.UserDTO.QuestionComentarie;
import com.example.demo.DTO.UserDTO.perfilInfo;
import com.example.demo.DTO.UserDTO.perfilLikesReturn;

public interface UserServices {
  Return register(RegisterData data);
  Return Login(LoginData data);
  UserProfileResponse getUserProfile(Long idUser);
  Boolean checkPassword(String password);
  perfilInfo getPerfilData(Long idUser);
  String updatePhotoPerfil(String photo, Long idUser);
  perfilLikesReturn getLikes(Long idUser);
  List<QuestionComentarie> getQuestionComentaries(Long idUser);
  List<AnswerComentarie> getAnswerComentaries(Long idUser);
}
