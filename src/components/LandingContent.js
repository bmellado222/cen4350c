import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/LandingContent.css';
import ArticlePost from './ArticlePost';

const LandingContent = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/articles`)
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.error('Error occurred while fetching articles:', error);
            });
    }, []);

    return (
        <main className="main-content">
            <div className="main-container">
                <div className="articles-container">
                    {articles.map((article, index) => (
                        <ArticlePost key={index} article={article} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default LandingContent;
