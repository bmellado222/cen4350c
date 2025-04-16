package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.CharacterCombos;
import com.mellado.janken.jankenwebsite.repository.CharacterComboRepository;
import com.mellado.janken.jankenwebsite.service.NotationConverterService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static com.mellado.janken.jankenwebsite.controller.CharacterMoveController.getStrings;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/character-combos")
public class CharacterComboController {
    private final CharacterComboRepository characterComboRepository;
    private final NotationConverterService notationConverterService;


    public CharacterComboController(CharacterComboRepository characterComboRepository, NotationConverterService notationConverterService) {
        this.characterComboRepository = characterComboRepository;
        this.notationConverterService = notationConverterService;
    }

    @GetMapping
    public List<CharacterCombos> getAllCharacterCombos() {
        return characterComboRepository.findAll();
    }


    @GetMapping("/notation-images")
    public List<String> getComboSequence(@RequestParam String comboSequence) {
        return getStrings(comboSequence, notationConverterService);
    }
}
