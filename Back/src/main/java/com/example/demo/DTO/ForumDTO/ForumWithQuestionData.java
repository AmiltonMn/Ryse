package com.example.demo.DTO.ForumDTO;

import java.util.List;

public record ForumWithQuestionData(
    ForumData forum,
    List<QuestionData> questions
) {}
