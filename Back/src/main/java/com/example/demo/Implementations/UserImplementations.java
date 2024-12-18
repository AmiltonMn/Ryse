package com.example.demo.Implementations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.DTO.LoginData;
import com.example.demo.DTO.RegisterDTO.RegisterData;
import com.example.demo.DTO.Return;
import com.example.demo.DTO.Token;
import com.example.demo.DTO.UserDTO.AnswerComentarie;
import com.example.demo.DTO.UserDTO.QuestionComentarie;
import com.example.demo.DTO.UserDTO.UserProfileResponse;
import com.example.demo.DTO.UserDTO.appearanceUser;
import com.example.demo.DTO.UserDTO.perfilInfo;
import com.example.demo.DTO.UserDTO.perfilLikesReturn;
import com.example.demo.JWTCreate;
import com.example.demo.Models.Answer;
import com.example.demo.Models.LikeAnswer;
import com.example.demo.Models.Question;
import com.example.demo.Models.User;
import com.example.demo.Models.UserHardSkill;
import com.example.demo.Repositories.AreasOfInterestRepository;
import com.example.demo.Repositories.HardSkillRepository;
import com.example.demo.Repositories.UserHardSkillRepository;
import com.example.demo.Repositories.AnswerRepository;
import com.example.demo.Repositories.LikeAnswerRepository;
import com.example.demo.Repositories.QuestionRepository;
import com.example.demo.Repositories.UserHardSkillRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Services.EncodeServices;
import com.example.demo.Services.UserServices;

public class UserImplementations implements UserServices {

    @Autowired
    UserRepository userRepo;

    @Autowired
    LikeAnswerRepository likeAnswerRepo;

    @Autowired
    QuestionRepository questionRepo;

    @Autowired
    AnswerRepository answerRepo;

    @Autowired
    EncodeServices encode;



    @Override
    public Return register(RegisterData data) {

        if (!checkPassword(data.password()))
            return new Return("Password does not meet the criteria", null, false);

        if (!userRepo.findByEmail(data.email()).isEmpty())
            return new Return("Already have a user with this email", null, false);

        if (!userRepo.findByName(data.name()).isEmpty())
            return new Return("Already have a user with this name", null, false);

        if (!userRepo.findByedv(data.name()).isEmpty())
            return new Return("Already have a user with this EDV", null, false);

        var encoder = new BCryptPasswordEncoder();

        User newUser = new User();

        newUser.setName(data.name());
        newUser.setUsername(data.username());
        newUser.setEmail(data.email());
        newUser.setEdv(data.EDV());
        newUser.setPassword(encoder.encode(data.password()));
        newUser.setUserState("Student");

        userRepo.save(newUser);

        return new Return("User created with sucess", newUser.getUserState(), true);

    }

    @Override
    public Return Login(LoginData data) {

        if (data.email().isEmpty() || data.password().isEmpty())
            return new Return("All fields must be filled in", null, false);

        Optional<User> userOptional = userRepo.findByEmail(data.email());

        if (userOptional.isEmpty())
            return new Return("User not found", null, false);

        User user = userOptional.get();

        if (!encode.validate(data.password(), user.getPassword()))
            return new Return("Password incorrect", null, false);

        Token token = new Token();

        token.setId(user.getId());
        token.setRole(user.getUserState());

        JWTCreate jwtCreate = new JWTCreate();

        String jwt = "Bearer " + jwtCreate.get(token);
        System.out.print(jwt);

        return new Return(jwt, user.getUserState(), true);
    }

    @Override
    public Boolean checkPassword(String password) {
        if (password.length() < 12) {
            return false;
        }

        return password.matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).+$");
    }

    @Override
    public perfilInfo getPerfilData(Long idUser) {
       var user = userRepo.findById(idUser).get();
       
        return new perfilInfo(user.getName(), user.getName(), user.getPhoto(), "Oie! Seja bem-vindo(a) ao meu perfil 😁 Sou o Amilton, Engenheira de Software em formação e Técnica de Soluções Digitais na Bosch, com experiência em inovação, transformação digital e análise de dados...", user.getBio());
    }

    @Override
    public String updatePhotoPerfil(String photo,Long idUser) {
       userRepo.updatePhoto(photo, idUser);
       return "let's Go";
    }

    @Override
    public perfilLikesReturn getLikes(Long idUser) {

        var allLikes = likeAnswerRepo.getLikesUser(idUser);
        List<Answer> answers = new ArrayList<>();
        for (LikeAnswer like : allLikes) {
            answers.add(answerRepo.getAnswers(like.getAnswer().getIdAnswer()));
        }
        List<String> allAnswers = new ArrayList<>();
        List<appearanceUser> usersAnswer = new ArrayList<>();
        for (Answer answer : answers) {
            usersAnswer.add(new appearanceUser(answer.getUser().getName(), answer.getUser().getName(), answer.getUser().getPhoto()));
            allAnswers.add(answer.getText());
        }

        return new perfilLikesReturn(usersAnswer, allAnswers);
    }

    @Override
    public List<QuestionComentarie> getQuestionComentaries(Long idUser) {
        var response = questionRepo.getQuestionByUser(idUser);
        List<QuestionComentarie> questionComentaries = new ArrayList<>();
        for (Question question : response) {
            questionComentaries.add(new QuestionComentarie(question.getTopicForum().getName(), new appearanceUser(question.getUser().getUsername(),question.getUser().getName() , question.getUser().getPhoto()), question.getTitle(), question.getText(), question.getDate()));
        }
        return questionComentaries;
    }

    @Override
    public List<AnswerComentarie> getAnswerComentaries(Long idUser) {
        var response = answerRepo.getAnswersByUser(idUser);
        List<AnswerComentarie> answerComentarie = new ArrayList<>();
        for (Answer answer : response) {
            answerComentarie.add(new AnswerComentarie(new QuestionComentarie(answer.getQuestion().getTopicForum().getName(), new appearanceUser(answer.getQuestion().getUser().getUsername(),answer.getQuestion().getUser().getName() , answer.getQuestion().getUser().getPhoto()), answer.getQuestion().getTitle(), answer.getQuestion().getText(), answer.getQuestion().getDate()), new appearanceUser(answer.getUser().getUsername(), answer.getUser().getName(), answer.getUser().getPhoto()), answer.getText()));
        }
        return answerComentarie;
    }


}
