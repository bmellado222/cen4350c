package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.CharacterCombos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterComboRepository extends JpaRepository<CharacterCombos, Integer> {
}
