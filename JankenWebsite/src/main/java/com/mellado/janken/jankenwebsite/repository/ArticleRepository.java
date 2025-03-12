package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.Articles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Articles, Integer> {
}
