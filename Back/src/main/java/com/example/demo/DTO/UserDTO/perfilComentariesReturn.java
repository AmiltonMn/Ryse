package com.example.demo.DTO.UserDTO;

import java.util.List;

public record perfilComentariesReturn(
        List<QuestionComentarie> questionsComentaries,
        List<AnswerComentarie> answerComentaries) {

}
