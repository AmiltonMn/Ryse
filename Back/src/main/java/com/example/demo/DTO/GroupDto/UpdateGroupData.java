package com.example.demo.DTO.GroupDto;

public record UpdateGroupData(
    Long idGroup,
    String newName,
    String newDescription,
    String newObjective
) {}
