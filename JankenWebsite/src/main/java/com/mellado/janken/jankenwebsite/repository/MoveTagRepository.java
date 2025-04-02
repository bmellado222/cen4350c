package com.mellado.janken.jankenwebsite.repository;
import com.mellado.janken.jankenwebsite.entity.MoveTags;
import com.mellado.janken.jankenwebsite.entity.MoveTagsId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoveTagRepository extends JpaRepository<MoveTags, MoveTagsId> {
}
