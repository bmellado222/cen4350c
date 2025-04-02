package com.mellado.janken.jankenwebsite.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "charactermove")
public class CharacterMove {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("characterMoveId")
    @Column(name = "characterMoveId", nullable = false)
    private Integer characterMoveId;

    @ManyToOne
    @JsonProperty("FightingCharacter_fightingCharacterId")
    @JoinColumn(name = "FightingCharacter_fightingCharacterId", referencedColumnName = "fightingCharacterId", nullable = false)
    private FightingCharacter fightingCharacter;

    @ManyToOne
    @JsonProperty("FightingCharacter_FightingGames_fightingGameId")
    @JoinColumn(name = "FightingCharacter_FightingGames_fightingGameId", referencedColumnName = "fightingGameId", nullable = false)
    private FightingGames fightingGame;

    @JsonProperty("characterMoveName")
    @Column(name = "characterMoveName", nullable = false, length = 45)
    private String characterMoveName;

    @JsonProperty("moveInputSequence")
    @Column(name = "moveInputSequence", nullable = false)
    private String moveInputSequence;

    @JsonProperty("characterMoveDamage")
    @Column(name = "characterMoveDamage", nullable = false)
    private Integer characterMoveDamage;

    @JsonProperty("characterMoveHitLevel")
    @Column(name = "characterMoveHitLevel", nullable = false, length = 1)
    private String characterMoveHitLevel;

    @JsonProperty("characterMoveStartup")
    @Column(name = "characterMoveStartup", nullable = false, length = 5)
    private String characterMoveStartup;

    @JsonProperty("characterMoveOnHit")
    @Column(name = "characterMoveOnHit", nullable = false, length = 5)
    private String characterMoveOnHit;

    @JsonProperty("characterMoveOnBlock")
    @Column(name = "characterMoveOnBlock", nullable = false, length = 5)
    private String characterMoveOnBlock;

    @JsonProperty("characterMoveRecovery")
    @Column(name = "characterMoveRecovery", nullable = false, length = 5)
    private String characterMoveRecovery;

    @JsonProperty("characterMoveDescription")
    @Column(name = "characterMoveDescription", nullable = false, length = 510)
    private String characterMoveDescription;


    public Integer getCharacterMoveId() {
        return characterMoveId;
    }

    public void setCharacterMoveId(Integer characterMoveId) {
        this.characterMoveId = characterMoveId;
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

    public String getCharacterMoveName() {
        return characterMoveName;
    }

    public void setCharacterMoveName(String characterMoveName) {
        this.characterMoveName = characterMoveName;
    }

    public String getMoveInputSequence() {
        return moveInputSequence;
    }

    public void setMoveInputSequence(String moveInputSequence) {
        this.moveInputSequence = moveInputSequence;
    }

    public Integer getCharacterMoveDamage() {
        return characterMoveDamage;
    }

    public void setCharacterMoveDamage(Integer characterMoveDamage) {
        this.characterMoveDamage = characterMoveDamage;
    }

    public String getCharacterMoveHitLevel() {
        return characterMoveHitLevel;
    }

    public void setCharacterMoveHitLevel(String characterMoveHitLevel) {
        this.characterMoveHitLevel = characterMoveHitLevel;
    }

    public String getCharacterMoveStartup() {
        return characterMoveStartup;
    }

    public void setCharacterMoveStartup(String characterMoveStartup) {
        this.characterMoveStartup = characterMoveStartup;
    }

    public String getCharacterMoveOnHit() {
        return characterMoveOnHit;
    }

    public void setCharacterMoveOnHit(String characterMoveOnHit) {
        this.characterMoveOnHit = characterMoveOnHit;
    }

    public String getCharacterMoveOnBlock() {
        return characterMoveOnBlock;
    }

    public void setCharacterMoveOnBlock(String characterMoveOnBlock) {
        this.characterMoveOnBlock = characterMoveOnBlock;
    }

    public String getCharacterMoveRecovery() {
        return characterMoveRecovery;
    }

    public void setCharacterMoveRecovery(String characterMoveRecovery) {
        this.characterMoveRecovery = characterMoveRecovery;
    }

    public String getCharacterMoveDescription() {
        return characterMoveDescription;
    }

    public void setCharacterMoveDescription(String characterMoveDescription) {
        this.characterMoveDescription = characterMoveDescription;
    }
}
