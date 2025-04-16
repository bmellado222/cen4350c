package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.CharacterMove;
import com.mellado.janken.jankenwebsite.repository.CharacterMoveRepository;
import com.mellado.janken.jankenwebsite.service.NotationConverterService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/character-moves")
public class CharacterMoveController {
    private final CharacterMoveRepository characterMoveRepository;
    private final NotationConverterService notationConverterService;


    public CharacterMoveController(CharacterMoveRepository characterMoveRepository, NotationConverterService notationConverterService) {
        this.characterMoveRepository = characterMoveRepository;
        this.notationConverterService = notationConverterService;

    }

    @GetMapping
    public List<CharacterMove> getAllCharacterMoves() {
        return characterMoveRepository.findAllByOrderByCharacterMoveNameDesc();
    }


    @GetMapping("/notation-images")
    public List<String> getComboSequence(@RequestParam String moveInputSequence) {
        return getStrings(moveInputSequence, notationConverterService);
    }

    static List<String> getStrings(@RequestParam String moveInputSequence, NotationConverterService notationConverterService) {
        String[] characters = moveInputSequence.split(",");

        List<String> imageUrls = new ArrayList<>();
        for (String character : characters) {
            String imageUrl = notationConverterService.getImageForCharacter(character.trim());
            if (!imageUrl.isEmpty()) {
                imageUrls.add(imageUrl);
            }
        }

        return imageUrls;
    }
}
