package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.CharacterMove;
import com.mellado.janken.jankenwebsite.repository.CharacterMoveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/character-moves")
public class CharacterMoveController {

    @Autowired
    private CharacterMoveRepository characterMoveRepository;


    @GetMapping
    public List<CharacterMove> getAllCharacterMoves() {
        return characterMoveRepository.findAllByOrderByCharacterMoveNameDesc();
    }
}
