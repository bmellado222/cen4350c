package com.mellado.janken.jankenwebsite.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;


@Entity
@Table(name = "glossaryterms")
public class GlossaryTerms {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("termId")
    @Column(name = "termId", nullable = false)
    private Integer termId;

    @JsonProperty("termName")
    @Column(name = "termName", nullable = false, length = 50)
    private String termName;

    @JsonProperty("termDescription")
    @Column(name = "termDescription", nullable = false, length = 4096)
    private String termDescription;

    @JsonProperty("termLogoUrl")
    @Column(name = "termLogoUrl")
    private String termLogoUrl;

    @JsonProperty("termTopic")
    @Column(name = "termTopic", nullable = false, length = 50)
    private String termTopic;



    public Integer getTermId() {
        return termId;
    }

    public void setTermId(Integer termId) {
        this.termId = termId;
    }

    public String getTermName() {
        return termName;
    }

    public void setTermName(String termName) {
        this.termName = termName;
    }

    public String getTermDescription() {
        return termDescription;
    }

    public void setTermDescription(String termDescription) {
        this.termDescription = termDescription;
    }

    public String getTermLogoUrl() {
        return termLogoUrl;
    }

    public void setTermLogoUrl(String termLogoUrl) {
        this.termLogoUrl = termLogoUrl;
    }

    public String getTermTopic() {
        return termTopic;
    }

    public void setTermTopic(String termTopic) {
        this.termTopic = termTopic;
    }
}
