package com.example.demo.DTO.UserDTO;

import java.util.List;

public record perfilLikesReturn(
    List<appearanceUser> users,
    List<String> answers
) {
    
}
