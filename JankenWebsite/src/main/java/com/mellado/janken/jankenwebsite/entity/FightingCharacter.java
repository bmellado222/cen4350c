package com.mellado.janken.jankenwebsite.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "fightingcharacter")
public class FightingCharacter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("fightingCharacterId")
    @Column(name = "fightingCharacterId", nullable = false)
    private Integer fightingCharacterId;

    @ManyToOne
    @JsonProperty("FightingGames_fightingGameId")
    @JoinColumn(name = "FightingGames_fightingGameId", referencedColumnName = "fightingGameId", nullable = false)
    private FightingGames fightingGame;

    @JsonProperty("fightingCharacterName")
    @Column(name = "fightingCharacterName", nullable = false, length = 50)
    private String fightingCharacterName;

    @JsonProperty("fightingCharacterPortraitUrl")
    @Column(name = "fightingCharacterPortraitUrl", nullable = false)
    private String fightingCharacterPortraitUrl;

    @JsonProperty("fightingCharacterOverview")
    @Column(name = "fightingCharacterOverview", nullable = false, length = 4096)
    private String fightingCharacterOverview;

    @JsonProperty("fightingCharacterStrength")
    @Column(name = "fightingCharacterStrength", nullable = false, length = 2048)
    private String fightingCharacterStrength;

    @JsonProperty("fightingCharacterWeakness")
    @Column(name = "fightingCharacterWeakness", nullable = false, length = 2048)
    private String fightingCharacterWeakness;


    public Integer getFightingCharacterId() {
        return fightingCharacterId;
    }

    public void setFightingCharacterId(Integer fightingCharacterId) {
        this.fightingCharacterId = fightingCharacterId;
    }

    public FightingGames getFightingGame() {
        return fightingGame;
    }

    public void setFightingGame(FightingGames fightingGame) {
        this.fightingGame = fightingGame;
    }


    public String getFightingCharacterName() {
        return fightingCharacterName;
    }

    public void setFightingCharacterName(String fightingCharacterName) {
        this.fightingCharacterName = fightingCharacterName;
    }

    public String getFightingCharacterPortraitUrl() {
        return fightingCharacterPortraitUrl;
    }

    public void setFightingCharacterPortraitUrl(String fightingCharacterPortraitUrl) {
        this.fightingCharacterPortraitUrl = fightingCharacterPortraitUrl;
    }

    public String getFightingCharacterOverview() {
        return fightingCharacterOverview;
    }

    public void setFightingCharacterOverview(String fightingCharacterOverview) {
        this.fightingCharacterOverview = fightingCharacterOverview;
    }

    public String getFightingCharacterStrength() {
        return fightingCharacterStrength;
    }

    public void setFightingCharacterStrength(String fightingCharacterStrength) {
        this.fightingCharacterStrength = fightingCharacterStrength;
    }

    public String getFightingCharacterWeakness() {
        return fightingCharacterWeakness;
    }

    public void setFightingCharacterWeakness(String fightingCharacterWeakness) {
        this.fightingCharacterWeakness = fightingCharacterWeakness;
    }
}
