package com.mellado.janken.jankenwebsite.entity;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class MoveTagsId implements Serializable {
    private Long characterMoveId;
    private Long tagId;
    private Long fightingCharacterId;
    private Long fightingGameId;

    public Long getCharacterMoveId() {
        return characterMoveId;
    }

    public void setCharacterMoveId(Long characterMoveId) {
        this.characterMoveId = characterMoveId;
    }

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public Long getFightingCharacterId() {
        return fightingCharacterId;
    }

    public void setFightingCharacterId(Long fightingCharacterId) {
        this.fightingCharacterId = fightingCharacterId;
    }

    public Long getFightingGameId() {
        return fightingGameId;
    }

    public void setFightingGameId(Long fightingGameId) {
        this.fightingGameId = fightingGameId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MoveTagsId that = (MoveTagsId) o;
        return Objects.equals(characterMoveId, that.characterMoveId) &&
                Objects.equals(tagId, that.tagId) &&
                Objects.equals(fightingCharacterId, that.fightingCharacterId) &&
                Objects.equals(fightingGameId, that.fightingGameId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(characterMoveId, tagId, fightingCharacterId, fightingGameId);
    }
}
