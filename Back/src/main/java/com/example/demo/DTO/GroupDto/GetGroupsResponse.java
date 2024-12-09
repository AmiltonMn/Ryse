package com.example.demo.DTO.GroupDTO;

import java.util.ArrayList;

public record GetGroupsResponse(
    ArrayList<getGroupAll> groupsList,
    String message
) {}
