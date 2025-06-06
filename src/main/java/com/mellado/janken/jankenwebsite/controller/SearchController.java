package com.mellado.janken.jankenwebsite.controller;


import com.mellado.janken.jankenwebsite.entity.Articles;
import com.mellado.janken.jankenwebsite.entity.FightingCharacter;
import com.mellado.janken.jankenwebsite.entity.FightingGames;
import com.mellado.janken.jankenwebsite.entity.GlossaryTerms;
import com.mellado.janken.jankenwebsite.repository.ArticleRepository;
import com.mellado.janken.jankenwebsite.repository.FightingCharacterRepository;
import com.mellado.janken.jankenwebsite.repository.FightingGameRepository;
import com.mellado.janken.jankenwebsite.repository.GlossaryTermRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/search")
public class SearchController {
    private final ArticleRepository articleRepository;
    private final GlossaryTermRepository glossaryTermRepository;
    private final FightingGameRepository fightingGameRepository;
    private final FightingCharacterRepository fightingCharacterRepository;

    public SearchController(ArticleRepository articleRepository, GlossaryTermRepository glossaryTermRepository, FightingGameRepository fightingGameRepository, FightingCharacterRepository fightingCharacterRepository) {
        this.articleRepository = articleRepository;
        this.glossaryTermRepository = glossaryTermRepository;
        this.fightingGameRepository = fightingGameRepository;
        this.fightingCharacterRepository = fightingCharacterRepository;
    }

    @GetMapping
    public Map<String, List<?>> search(@RequestParam String query) {
        query = query.trim();

        List<Articles> articles = articleRepository.findByArticleTitleContainingIgnoreCase(query);
        List<GlossaryTerms> glossaryTerms = glossaryTermRepository.findByTermNameContainingIgnoreCase(query);
        List<FightingGames> fightingGames = fightingGameRepository.findByFightingGameTitleContainingIgnoreCase(query);
        List<FightingCharacter> fightingCharacters = fightingCharacterRepository.findByFightingCharacterNameContainingIgnoreCase(query);


        Map<String, List<?>> results = new HashMap<>();
        results.put("articles", articles);
        results.put("glossaryTerms", glossaryTerms);
        results.put("fightingGames", fightingGames);
        results.put("fightingCharacters", fightingCharacters);


        return results;
    }
}
