package com.mellado.janken.jankenwebsite.controller;

import com.mellado.janken.jankenwebsite.entity.GlossaryTerms;
import com.mellado.janken.jankenwebsite.repository.GlossaryTermRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/glossary")
public class GlossaryTermController {

    @Autowired
    private GlossaryTermRepository glossaryTermRepository;

    @GetMapping
    public List<GlossaryTerms> getAllGlossaryTerms() {
        return glossaryTermRepository.findAllByOrderByTermNameAsc();
    }

}
