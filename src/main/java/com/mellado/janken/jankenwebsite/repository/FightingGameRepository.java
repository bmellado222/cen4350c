package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.FightingGames;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FightingGameRepository extends JpaRepository<FightingGames, Integer> {
    List<FightingGames> findAllByOrderByFightingGameTitleDesc();
    List<FightingGames> findByFightingGameTitleContainingIgnoreCase(String fightingGameTitle);

}
