import React from 'react';
import '../styles/GlossaryTerm.css';


const GlossaryTerm = ({ term }) => {

    return (

        <div className="term-details">
            <div className="term-header">
                <span className="term-name">{term.termName}</span>
                <img src={term.termLogoUrl} alt="Game Logo" className="term-game-logo"/>
            </div>
            <div className="term-description">{term.termDescription}</div>
        </div>
    );

}

export default GlossaryTerm;