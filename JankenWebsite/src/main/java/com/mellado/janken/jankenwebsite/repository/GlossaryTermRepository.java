package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.GlossaryTerms;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GlossaryTermRepository extends JpaRepository<GlossaryTerms, Integer> {
    List<GlossaryTerms> findAllByOrderByTermNameDesc();
    List<GlossaryTerms> findByTermNameContainingIgnoreCase(String glossaryTerm);
}
