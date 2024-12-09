package com.example.demo.DTO.GroupDto;

import java.util.ArrayList;

public record GetGroupsResponse(
    ArrayList<getGroupAll> groupsList,
    String message
) {}
