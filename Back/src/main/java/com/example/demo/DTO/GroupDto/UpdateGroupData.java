package com.example.demo.DTO.GroupDto;

import java.util.Date;

public record UpdateGroupData(
    Long idGroup,
    String newName,
    String newDescription,
    String newObjective
) {}
