import React from 'react';
import '../styles/GlossaryTerm.css';


const GlossaryTerm = ({ term }) => {

    return (
        <div className="term-details">
            <div className="term-header">
                <span className="term-name">{term.termName}</span>
                {term.termLogoUrl ? (
                    <img
                        src={term.termLogoUrl}
                        alt="Game Logo"
                        className="term-game-logo"
                    />
                ) : null}
            </div>
            <div
                className="term-description"
                dangerouslySetInnerHTML={{__html: term.termDescription}}
            ></div>
        </div>

    );

}

export default GlossaryTerm;