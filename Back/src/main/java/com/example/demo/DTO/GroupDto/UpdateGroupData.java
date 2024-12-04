package com.example.demo.DTO.GroupDto;

import java.util.Date;

public record UpdateGroupData(
    String newName,
    String newDescription,
    String newObjective,
    Date date
) {}
