package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.DTO.Token;
import com.example.demo.Filters.JWTAuthenticationFilter;
import com.example.demo.Implementations.EncodeImplementations;
<<<<<<< HEAD
import com.example.demo.Implementations.GroupImplementations;
=======
import com.example.demo.Implementations.ForumImplementation;
>>>>>>> forum
import com.example.demo.Implementations.HardSkillImplementation;
import com.example.demo.Implementations.IdeaImplementations;
import com.example.demo.Implementations.TopicImplementation;
import com.example.demo.Implementations.UserImplementations;
import com.example.demo.Services.EncodeServices;
<<<<<<< HEAD
import com.example.demo.Services.GroupServices;
=======
import com.example.demo.Services.ForumService;
>>>>>>> forum
import com.example.demo.Services.HardSkillService;
import com.example.demo.Services.IdeaServices;
import com.example.demo.Services.JWTService;
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
    public UserServices userServices(){
        return new UserImplementations();
    }

    @Bean
    public EncodeServices encodeServices(){
        return new EncodeImplementations();
    }

    @Bean
    public HardSkillService hardSkillService (){
        return new HardSkillImplementation();
    }

    @Bean
    public IdeaServices ideaServices (){
        return new IdeaImplementations();
    }

    @Bean
    public TopicService topicService(){
        return new TopicImplementation();
    }    @Bean
    public GroupServices groupServices (){
        return new GroupImplementations();
    }

<<<<<<< HEAD

=======
    @Bean
    public ForumService forumService(){
        return new ForumImplementation();
    }
>>>>>>> forum
}