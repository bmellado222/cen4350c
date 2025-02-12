import React from 'react';
import '../styles/GlossaryTerm.css';


const GlossaryTerm = ({ term }) => {

    return (

        <div className="term-details">
            <div className="term-header">
                <span className="term-name">{term.name}</span>
                <img src={term.gameLogo} alt="Game Logo" className="term-game-logo"/>
            </div>
            <div className="term-description">{term.description}</div>
        </div>
    );

}

export default GlossaryTerm;