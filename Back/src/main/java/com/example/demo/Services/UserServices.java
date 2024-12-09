package com.example.demo.Services;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.Return;

public interface UserServices {
  Return register(RegisterData data);
  Return Login(LoginData data);
  Boolean checkPassword(String password);
}
