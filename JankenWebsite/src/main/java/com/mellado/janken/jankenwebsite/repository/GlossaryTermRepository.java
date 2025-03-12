package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.GlossaryTerms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GlossaryTermRepository extends JpaRepository<GlossaryTerms, Integer> {
}
