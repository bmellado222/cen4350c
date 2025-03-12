package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.FightingCharacter;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FightingCharacterRepository extends JpaRepository<FightingCharacter, Integer> {
}
