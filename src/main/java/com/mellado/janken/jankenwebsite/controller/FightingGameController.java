package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.FightingGames;
import com.mellado.janken.jankenwebsite.repository.FightingGameRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/fighting-games")
public class FightingGameController {
    private final FightingGameRepository fightingGameRepository;

    public FightingGameController(FightingGameRepository fightingGameRepository) {
        this.fightingGameRepository = fightingGameRepository;
    }

    @GetMapping
    public List<FightingGames> getAllFightingGames() {
        return fightingGameRepository.findAllByOrderByFightingGameTitleDesc();
    }
}
