package com.example.demo.DTO.GroupDTO;

public record GroupGet(
    String name,
    String description,
    String objective,
    boolean isOwner
) {}
