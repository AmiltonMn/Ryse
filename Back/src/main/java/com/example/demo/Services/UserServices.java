package com.example.demo.Services;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.LoginReturn;
import com.example.demo.DTO.RegisterData;

public interface UserServices {
  String register(RegisterData data);
  LoginReturn Login(LoginData data);
  Boolean checkPassword(String password);
}
