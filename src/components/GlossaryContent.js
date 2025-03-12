import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/GlossaryContent.css';
import GlossaryTerm from "./GlossaryTerm";


const GlossaryContent = () => {
    const [glossary, setGlossary] = useState([]);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/glossary`)
            .then((response) => {
                setGlossary(response.data);
            })
            .catch((error) => {
                console.error('Error occurred while fetching glossary terms:', error);
            });
    }, []);

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