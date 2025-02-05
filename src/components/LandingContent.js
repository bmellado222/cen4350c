import React from 'react';
import '../styles/LandingContent.css';
import ArticlePost from './ArticlePost';
import fakeArticles from './fakeArticles';


const LandingContent = () => {
    return (
        <main className="main-content">
            <div className="main-container">
                <div className="articles-container">
                    {fakeArticles.map((article, index) => (
                        <ArticlePost key={index} article={article}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default LandingContent;