package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.Articles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Articles, Integer> {
    List<Articles> findAllByOrderByDateCreatedDesc();
    List<Articles> findByArticleTitleContainingIgnoreCase(String articleTitle);

}
