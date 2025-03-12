package com.mellado.janken.jankenwebsite.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;


@Entity
@Table(name = "fightinggames")
public class FightingGames {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("fightingGameId")
    @Column(name = "fightingGameId", nullable = false)
    private Integer fightingGameId;

    @JsonProperty("fightingGameTitle")
    @Column(name = "fightingGameTitle", nullable = false, length = 30)
    private String fightingGameTitle;

    @JsonProperty("fightingGameLogo")
    @Column(name = "fightingGameLogo", nullable = false)
    private String fightingGameLogo;


    public Integer getFightingGameId() {
        return fightingGameId;
    }

    public void setFightingGameId(Integer fightingGameId) {
        this.fightingGameId = fightingGameId;
    }

    public String getFightingGameTitle() {
        return fightingGameTitle;
    }

    public void setFightingGameTitle(String fightingGameTitle) {
        this.fightingGameTitle = fightingGameTitle;
    }

    public String getFightingGameLogo() {
        return fightingGameLogo;
    }

    public void setFightingGameLogo(String fightingGameLogo) {
        this.fightingGameLogo = fightingGameLogo;
    }
}
