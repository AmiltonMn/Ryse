package com.example.demo.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbQuestion")
public class Question {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idQuestion;

    @ManyToOne
    @JoinColumn(name = "idForum", nullable = false)
    private Forum forum;

    @ManyToOne
    @JoinColumn(name = "idTopicForum", nullable = false)
    private ForumTopic topicForum;

    @ManyToOne
    @JoinColumn(name = "idUser", nullable = false)
    private User user;

    @Column
    private String text;

    @Column
    private String title;

    @Column
    private String date;

    @OneToMany
    @JoinColumn(name = "idAnswer")
    private List<Answer> answers;

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public Long getIdQuestion() {
        return idQuestion;
    }

    public ForumTopic getTopicForum() {
        return topicForum;
    }

    public void setTopicForum(ForumTopic topicForum) {
        this.topicForum = topicForum;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setIdQuestion(Long idQuestion) {
        this.idQuestion = idQuestion;
    }

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }
}
