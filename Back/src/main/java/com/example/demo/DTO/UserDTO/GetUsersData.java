package com.example.demo.DTO.UserDTO;

import java.util.ArrayList;

public record GetUsersData(
    ArrayList<UserData> users,
    Boolean result
) {}
