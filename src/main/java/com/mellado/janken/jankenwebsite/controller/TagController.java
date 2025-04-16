package com.mellado.janken.jankenwebsite.controller;


import com.mellado.janken.jankenwebsite.entity.Tags;
import com.mellado.janken.jankenwebsite.repository.TagRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tags")
public class TagController {
    private final TagRepository tagRepository;

    public TagController (TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @GetMapping
    public List<Tags> getAllTags() {
        return tagRepository.findAll();
    }
}
