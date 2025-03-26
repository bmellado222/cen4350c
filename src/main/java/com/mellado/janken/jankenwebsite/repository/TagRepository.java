package com.mellado.janken.jankenwebsite.repository;

import com.mellado.janken.jankenwebsite.entity.Tags;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tags, Integer> {
}
