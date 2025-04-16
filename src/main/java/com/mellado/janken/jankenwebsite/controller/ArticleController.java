package com.mellado.janken.jankenwebsite.controller;
import com.mellado.janken.jankenwebsite.entity.Articles;
import com.mellado.janken.jankenwebsite.repository.ArticleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleRepository articleRepository;

    public ArticleController(ArticleRepository articleRepository){
        this.articleRepository = articleRepository;
    }

    @GetMapping
    public List<Articles> getAllArticles() {
        return articleRepository.findAllByOrderByDateCreatedDesc();
    }

}
