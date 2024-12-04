package com.example.demo.Implementations;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.Services.EncodeServices;

public class EncodeImplementations  implements EncodeServices {
    
    @Override
    public String encode(String pass) {
        var encoder = new BCryptPasswordEncoder(10);
        return encoder.encode(pass);
    }

    @Override
    public Boolean validate(String password, String passEncode) {

        var encoder = new BCryptPasswordEncoder(10);

        return encoder.matches(password, passEncode);
    }
    
}
