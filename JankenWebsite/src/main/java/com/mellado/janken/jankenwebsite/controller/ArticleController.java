package com.mellado.janken.jankenwebsite.controller;
import com.mellado.janken.jankenwebsite.entity.Articles;
import com.mellado.janken.jankenwebsite.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping
    public List<Articles> getAllArticles() {
        return articleRepository.findAllByOrderByDateCreatedDesc();
    }

}
