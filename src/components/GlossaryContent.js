import React from 'react';
import '../styles/GlossaryContent.css';
import fakeTerms from "./fakeTerms";
import GlossaryTerm from "./GlossaryTerm";


const GlossaryContent = () => {
    return (
        <main className="glossary-content">
            <div className="search-container">
                <input type="text" className="term-search-bar" placeholder="Search..."/>
            </div>
            <div className="glossary-section">
                <div className="terms-container">
                    {fakeTerms.map((term, index) => (
                        <GlossaryTerm key={index} term={term}/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default GlossaryContent;