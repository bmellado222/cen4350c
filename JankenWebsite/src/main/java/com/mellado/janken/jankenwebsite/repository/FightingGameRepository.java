package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.FightingGames;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FightingGameRepository extends JpaRepository<FightingGames, Integer> {
}
