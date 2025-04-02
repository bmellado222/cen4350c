import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/LandingContent.css';
import ArticlePost from './ArticlePost';

const LandingContent = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            setError(null);

            if (location.pathname === '/articles/search' && query) {
                axios
                    .get(`${process.env.REACT_APP_API_BASE_URL}/api/search`, { params: { query } })
                    .then((response) => {
                        setArticles(response.data.articles || []);
                    })
                    .catch((error) => {
                        setError('Failed to load search results.');
                        console.error(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                axios
                    .get(`${process.env.REACT_APP_API_BASE_URL}/api/articles`)
                    .then((response) => {
                        setArticles(response.data);
                    })
                    .catch((error) => {
                        setError('Failed to load articles.');
                        console.error(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        };

        fetchData();
    }, [location, query]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!loading && articles.length === 0) return <div>No articles found.</div>;

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
