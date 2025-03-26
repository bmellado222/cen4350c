package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.CharacterCombos;
import com.mellado.janken.jankenwebsite.repository.CharacterComboRepository;
import com.mellado.janken.jankenwebsite.service.CharacterComboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/character-combos")
public class CharacterComboController {

    @Autowired
    private CharacterComboRepository characterComboRepository;

    @Autowired
    private CharacterComboService characterComboService;

    @GetMapping
    public List<CharacterCombos> getAllCharacterCombos() {
        return characterComboRepository.findAll();
    }


    @GetMapping("/notation-images")
    public List<String> getComboSequence(@RequestParam String comboSequence) {
        String[] characters = comboSequence.split(",");

        List<String> imageUrls = new ArrayList<>();
        for (String character : characters) {
            String imageUrl = characterComboService.getImageForCharacter(character.trim());
            if (!imageUrl.isEmpty()) {
                imageUrls.add(imageUrl);
            }
        }

        return imageUrls;
    }
}
