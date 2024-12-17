package com.example.demo.DTO.AreasOfInterestDto;

import java.util.ArrayList;

public record AreasOfInterestResponse(
    ArrayList<AreaOfInterestData> areas,
    String message,
    Boolean result
) {}
