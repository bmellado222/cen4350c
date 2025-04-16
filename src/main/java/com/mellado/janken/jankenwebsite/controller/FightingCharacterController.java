package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.FightingCharacter;
import com.mellado.janken.jankenwebsite.repository.FightingCharacterRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/fighting-characters")
public class FightingCharacterController {
    private final FightingCharacterRepository fightingCharacterRepository;

    public FightingCharacterController(FightingCharacterRepository fightingCharacterRepository) {
        this.fightingCharacterRepository = fightingCharacterRepository;
    }

    @GetMapping
    public List<FightingCharacter> getAllFightingCharacters() {
        return fightingCharacterRepository.findAllByOrderByFightingCharacterName();
    }
}
