import React from 'react';
import '../styles/ArticlePost.css';

const ArticlePost = ({ article }) => {
    const getElapsedTime = (date) => {
        const now = new Date();
        const articleDate = new Date(date);
        console.log(Date, now);
        const diffTime = now - articleDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        const diffMonths =
            (now.getFullYear() - articleDate.getFullYear()) * 12 +
            (now.getMonth() - articleDate.getMonth());

        if (diffMonths > 0) {
            return `${diffMonths} months ago`;
        } else {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} weeks ago`;
        }
    };



    return (
        <a href={article.articleLink} className="article-card">
            <div className="thumbnail">
                <img src={article.articleThumbnailUrl} alt="Article Thumbnail" />
            </div>
            <div className="details">
                <img src={article.articleLogoUrl} alt="Game Logo" className="game-logo" />
                <div className="article-name">{article.articleTitle}</div>
                <div className="article-date">{article.dateCreated}</div>
                <div className="elapsed-time">{getElapsedTime(article.dateCreated)}</div>
            </div>
        </a>
    );
};

export default ArticlePost;