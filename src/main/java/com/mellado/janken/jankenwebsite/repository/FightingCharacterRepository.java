package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.FightingCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface FightingCharacterRepository extends JpaRepository<FightingCharacter, Integer> {
    List<FightingCharacter> findAllByOrderByFightingCharacterName();
    List<FightingCharacter> findByFightingCharacterNameContainingIgnoreCase(String fightingCharacterName);
}
