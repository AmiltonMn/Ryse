package com.example.demo.DTO.GroupDTO;

public record UpdateGroupData(
    Long idGroup,
    String newName,
    String newDescription,
    String newObjective
) {}
