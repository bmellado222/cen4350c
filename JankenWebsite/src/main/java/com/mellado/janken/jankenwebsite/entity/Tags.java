package com.mellado.janken.jankenwebsite.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;


@Entity
@Table(name = "tags")
public class Tags {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("tagId")
    @Column(name = "tagId", nullable = false)
    private Integer tagId;

    @JsonProperty("tagName")
    @Column(name = "tagName", nullable = false, length = 25)
    private String tagName;

    public Integer getTagId() {
        return tagId;
    }

    public void setTagId(Integer tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

}
