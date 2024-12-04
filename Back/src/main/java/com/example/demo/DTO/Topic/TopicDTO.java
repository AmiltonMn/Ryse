package com.example.demo.DTO.Topic;

import java.util.Date;

public record TopicDTO(
    String name,
    Date date,
    Long idUser
) {}