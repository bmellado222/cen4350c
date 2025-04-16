package com.mellado.janken.jankenwebsite.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;


@Entity
@Table(name = "movetags")
public class MoveTags {

    @EmbeddedId
    private MoveTagsId id;

    @ManyToOne
    @JsonProperty("CharacterMove_characterMoveId")
    @JoinColumn(name = "CharacterMove_characterMoveId", referencedColumnName = "characterMoveId", nullable = false)
    private CharacterMove characterMove;

    @ManyToOne
    @JsonProperty("Tags_tagId")
    @JoinColumn(name = "Tags_tagId", referencedColumnName = "tagId", nullable = false)
    private Tags tags;

    @ManyToOne
    @JsonProperty("CharacterMove_FightingCharacter_fightingCharacterId")
    @JoinColumn(name = "CharacterMove_FightingCharacter_fightingCharacterId", referencedColumnName = "fightingCharacterId", nullable = false)
    private FightingCharacter fightingCharacter;

    @ManyToOne
    @JsonProperty("CharacterMove_FightingCharacter_FightingGames_fightingGameId")
    @JoinColumn(name = "CharacterMove_FightingCharacter_FightingGames_fightingGameId", referencedColumnName = "fightingGameId", nullable = false)
    private FightingGames fightingGame;

    public CharacterMove getCharacterMove() {
        return characterMove;
    }

    public void setCharacterMove(CharacterMove characterMove) {
        this.characterMove = characterMove;
    }

    public Tags getTags() {
        return tags;
    }

    public void setTags(Tags tags) {
        this.tags = tags;
    }

    public FightingCharacter getFightingCharacter() {
        return fightingCharacter;
    }

    public void setFightingCharacter(FightingCharacter fightingCharacter) {
        this.fightingCharacter = fightingCharacter;
    }

    public FightingGames getFightingGame() {
        return fightingGame;
    }

    public void setFightingGame(FightingGames fightingGame) {
        this.fightingGame = fightingGame;
    }

}
