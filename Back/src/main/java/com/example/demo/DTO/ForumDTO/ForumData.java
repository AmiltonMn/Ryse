package com.example.demo.DTO.ForumDTO;

import java.util.Date;

public record ForumData(
    Long idForum,
    String username,
    Date date,
    String title,
    Boolean isOwner
) {}
