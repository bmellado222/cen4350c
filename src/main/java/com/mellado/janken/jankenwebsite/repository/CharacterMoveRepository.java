package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.CharacterMove;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterMoveRepository extends JpaRepository<CharacterMove, Integer> {
    List<CharacterMove> findAllByOrderByCharacterMoveNameDesc();
}
