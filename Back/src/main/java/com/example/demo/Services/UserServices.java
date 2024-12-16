package com.example.demo.Services;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.UserDTO.UserProfileResponse;
import com.example.demo.DTO.Return;

public interface UserServices {
  Return register(RegisterData data);
  Return Login(LoginData data);
  UserProfileResponse getUserProfile(Long idUser);
  Boolean checkPassword(String password);
}
