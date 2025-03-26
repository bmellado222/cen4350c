package com.mellado.janken.jankenwebsite.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "articles")
public class Articles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("articleId")
    @Column(name = "articleId", nullable = false)
    private Integer articleId;

    @JsonProperty("articleTitle")
    @Column(name = "articleTitle", nullable = false, length = 50)
    private String articleTitle;

    @JsonProperty("dateCreated")
    @Column(name = "dateCreated", nullable = false)
    private LocalDate dateCreated;

    @JsonProperty("articleLink")
    @Column(name = "articleLink", nullable = false)
    private String articleLink;

    @JsonProperty("articleThumbnailUrl")
    @Column(name = "articleThumbnailUrl", nullable = false)
    private String articleThumbnailUrl;

    @JsonProperty("articleLogoUrl")
    @Column(name = "articleLogoUrl", nullable = false)
    private String articleLogoUrl;

    @JsonProperty("articleTopic")
    @Column(name = "articleTopic", nullable = false, length = 50)
    private String articleTopic;

    public Articles(Integer articleId, String articleTitle, LocalDate dateCreated, String articleLink, String articleThumbnailUrl, String articleLogoUrl, String articleTopic){
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.dateCreated = dateCreated;
        this.articleLink = articleLink;
        this.articleThumbnailUrl = articleThumbnailUrl;
        this.articleLogoUrl = articleLogoUrl;
        this.articleTopic = articleTopic;
    }

    public Articles() {

    }

    public Integer getArticleId() {
        return articleId;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getArticleLink() {
        return articleLink;
    }

    public void setArticleLink(String articleLink) {
        this.articleLink = articleLink;
    }

    public String getArticleThumbnailUrl() {
        return articleThumbnailUrl;
    }

    public void setArticleThumbnailUrl(String articleThumbnailUrl) {
        this.articleThumbnailUrl = articleThumbnailUrl;
    }

    public String getArticleLogoUrl() {
        return articleLogoUrl;
    }

    public void setArticleLogoUrl(String articleLogoUrl) {
        this.articleLogoUrl = articleLogoUrl;
    }

    public String getArticleTopic() {
        return articleTopic;
    }

    public void setArticleTopic(String articleTopic) {
        this.articleTopic = articleTopic;
    }
}
