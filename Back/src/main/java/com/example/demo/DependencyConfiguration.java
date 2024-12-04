package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.DTO.Token;
import com.example.demo.Filters.JWTAuthenticationFilter;
import com.example.demo.Services.JWTService;

@Configuration
public class DependencyConfiguration {
    
    @Bean
    public JWTService<Token> jwtService() {
        return new JWTCreate();
    }

    @Bean
    public JWTAuthenticationFilter JWTAuthenticationFilter() {
        return new JWTAuthenticationFilter();
    }

}