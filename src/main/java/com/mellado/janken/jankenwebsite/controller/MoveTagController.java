package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.MoveTags;
import com.mellado.janken.jankenwebsite.repository.MoveTagRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/move-tags")
public class MoveTagController {
    private final MoveTagRepository moveTagRepository;

    public MoveTagController(MoveTagRepository moveTagRepository) {
        this.moveTagRepository = moveTagRepository;
    }

    @GetMapping
    public List<MoveTags> getAllMoveTags() {
        return moveTagRepository.findAll();
    }
}
