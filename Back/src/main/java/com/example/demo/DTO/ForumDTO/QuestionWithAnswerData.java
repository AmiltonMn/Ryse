package com.example.demo.DTO.ForumDTO;

import java.util.List;

public record QuestionWithAnswerData(
    
    QuestionData question,
    List<AnswerData> answers
) {}
