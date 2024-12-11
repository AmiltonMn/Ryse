package com.example.demo.DTO.GroupDto;

public record GroupGet(
    String name,
    String description,
    String objective,
    boolean isOwner
) {}
