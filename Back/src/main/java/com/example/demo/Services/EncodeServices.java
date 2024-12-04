package com.example.demo.Services;

public interface EncodeServices {
    String encode(String pass);
    Boolean validate(String pass, String passEncode);
}
