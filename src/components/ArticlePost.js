import React from 'react';
import '../styles/ArticlePost.css';

const ArticlePost = ({ article }) => {
    const getElapsedMonths = (date) => {
        const now = new Date();
        const articleDate = new Date(date);
        const diffTime = Math.abs(now - articleDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    };

    return (
        <a href={article.articleLink} className="article-card">
            <div className="thumbnail">
                <img src={article.articleThumbnailUrl} alt="Article Thumbnail" />
            </div>
            <div className="details">
                <img src={article.articleLogoUrl} alt="Game Logo" className="game-logo" />
                <div className="article-name">{article.articleTitle}</div>
                <div className="article-date">{new Date(article.dateCreated).toLocaleDateString()}</div>
                <div className="elapsed-months">{getElapsedMonths(article.dateCreated)} months ago</div>
            </div>
        </a>
    );
};

export default ArticlePost;