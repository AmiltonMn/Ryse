package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.DTO.Token;
import com.example.demo.Filters.JWTAuthenticationFilter;
import com.example.demo.Implementations.EncodeImplementations;
import com.example.demo.Implementations.FeedbackImplementations;
import com.example.demo.Implementations.GroupImplementations;

import com.example.demo.Implementations.ForumImplementation;
import com.example.demo.Implementations.HardSkillImplementation;
import com.example.demo.Implementations.IdeaImplementations;
import com.example.demo.Implementations.TopicChatImplementations;
import com.example.demo.Implementations.TopicImplementation;
import com.example.demo.Implementations.UserImplementations;
import com.example.demo.Services.EncodeServices;
import com.example.demo.Services.FeedbackServices;
import com.example.demo.Services.GroupServices;
import com.example.demo.Services.ForumService;
import com.example.demo.Services.HardSkillService;
import com.example.demo.Services.IdeaServices;
import com.example.demo.Services.JWTService;
import com.example.demo.Services.TopicChatServices;
import com.example.demo.Services.TopicService;
import com.example.demo.Services.UserServices;

@Configuration
public class DependencyConfiguration {

    @Bean
    public JWTService<Token> jwtService() {
        return new JWTCreate();
    }

    @Bean
    public JWTAuthenticationFilter JWTAuthenticationFilter() {
        return new JWTAuthenticationFilter();
    }

    @Bean
    public UserServices userServices() {
        return new UserImplementations();
    }

    @Bean
    public EncodeServices encodeServices() {
        return new EncodeImplementations();
    }

    @Bean
    public HardSkillService hardSkillService() {
        return new HardSkillImplementation();
    }

    @Bean
    public IdeaServices ideaServices() {
        return new IdeaImplementations();
    }

    @Bean
    public TopicService topicService() {
        return new TopicImplementation();
    }

    @Bean
    public GroupServices groupServices() {
        return new GroupImplementations();
    }

    @Bean
    public FeedbackServices feedbackServices() {
        return new FeedbackImplementations();
    }

    @Bean
    public TopicChatServices topicChatServices() {
        return new TopicChatImplementations();
    }
    @Bean
    public ForumService forumService(){
        return new ForumImplementation();
    }
}