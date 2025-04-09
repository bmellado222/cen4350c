import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import '../styles/GlossaryContent.css';
import GlossaryTerm from "./GlossaryTerm";


const GlossaryContent = () => {
    const [glossary, setGlossary] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            setError(null);

            if (location.pathname === '/glossary/search' && query) {
                axios
                    .get(`${process.env.REACT_APP_API_BASE_URL}/api/search`, {params: {query}})
                    .then((response) => {
                        console.log('API Response:', response.data);
                        setGlossary(response.data.glossaryTerms || []);
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
                    .get(`${process.env.REACT_APP_API_BASE_URL}/api/glossary`)
                    .then((response) => {
                        setGlossary(response.data);
                    })
                    .catch((error) => {
                        setError('Failed to load glossary.');
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
    if (!loading && glossary.length === 0) return <div>No terms found.</div>;

    return (
        <main className="glossary-content">
            <div className="search-container">
                <input type="text" className="term-search-bar" placeholder="Search..."/>
            </div>
            <div className="glossary-section">
                <div className="terms-container">
                    {glossary.map((term, index) => (
                        <GlossaryTerm key={index} term={term}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default GlossaryContent;