package com.mellado.janken.jankenwebsite.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "charactercombos")
public class CharacterCombos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("characterComboId")
    @Column(name = "characterComboId", nullable = false)
    private Integer characterComboId;

    @ManyToOne
    @JsonProperty("FightingCharacter_fightingCharacterId")
    @JoinColumn(name = "FightingCharacter_fightingCharacterId", referencedColumnName = "fightingCharacterId", nullable = false)
    private FightingCharacter fightingCharacter;

    @ManyToOne
    @JsonProperty("FightingCharacter_FightingGames_fightingGameId")
    @JoinColumn(name = "FightingCharacter_FightingGames_fightingGameId", referencedColumnName = "fightingGameId", nullable = false)
    private FightingGames fightingGame;

    @JsonProperty("characterComboStart")
    @Column(name = "characterComboStart", nullable = false, length = 25)
    private String characterComboStart;

    @JsonProperty("characterComboDamage")
    @Column(name = "characterComboDamage", nullable = false)
    private Integer characterComboDamage;

    @JsonProperty("characterComboHitCount")
    @Column(name = "characterComboHitCount", nullable = false)
    private Integer characterComboHitCount;

    @JsonProperty("characterComboDifficulty")
    @Column(name = "characterComboDifficulty", nullable = false, length = 45)
    private String characterComboDifficulty;

    @JsonProperty("characterComboSequence")
    @Column(name = "characterComboSequence", nullable = false, length = 510)
    private String characterComboSequence;

    public Integer getCharacterComboId() {
        return characterComboId;
    }

    public void setCharacterComboId(Integer characterComboId) {
        this.characterComboId = characterComboId;
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

    public String getCharacterComboStart() {
        return characterComboStart;
    }

    public void setCharacterComboStart(String characterComboStart) {
        this.characterComboStart = characterComboStart;
    }

    public Integer getCharacterComboDamage() {
        return characterComboDamage;
    }

    public void setCharacterComboDamage(Integer characterComboDamage) {
        this.characterComboDamage = characterComboDamage;
    }

    public Integer getCharacterComboHitCount() {
        return characterComboHitCount;
    }

    public void setCharacterComboHitCount(Integer characterComboHitCount) {
        this.characterComboHitCount = characterComboHitCount;
    }

    public String getCharacterComboDifficulty() {
        return characterComboDifficulty;
    }

    public void setCharacterComboDifficulty(String characterComboDifficulty) {
        this.characterComboDifficulty = characterComboDifficulty;
    }

    public String getCharacterComboSequence() {
        return characterComboSequence;
    }

    public void setCharacterComboSequence(String characterComboSequence) {
        this.characterComboSequence = characterComboSequence;
    }
}
