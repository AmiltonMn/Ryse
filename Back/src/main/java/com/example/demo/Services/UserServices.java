package com.example.demo.Services;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterData;
import com.example.demo.Models.User;

public interface UserServices {
  String register(RegisterData data);
  String Login(LoginData data);
  Boolean checkPassword(String password);
}
