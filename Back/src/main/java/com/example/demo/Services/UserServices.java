package com.example.demo.Services;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.LoginReturn;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.RegisterDTO.RegisterReturn;

public interface UserServices {
  RegisterReturn register(RegisterData data);
  LoginReturn Login(LoginData data);
  Boolean checkPassword(String password);
}
