package com.example.demo.Services;

import org.springframework.stereotype.Service;

@Service
public interface JWTService<T> {
    String get(T token);
    T validate(String jwt);
}
