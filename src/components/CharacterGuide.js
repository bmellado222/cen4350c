import React, {useState} from 'react';
import '../styles/CharacterGuide.css';
import {useParams} from "react-router-dom";
import { gamesStatic } from './staticGame';
import {IoMdStarOutline} from "react-icons/io";

const CharacterGuide = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const { characterId } = useParams();
    const character = gamesStatic.flatMap(game => game.characters).find(c => c.id === characterId);

    if (!character) {
        return <div>Character not found!</div>;
    }



    return (
        <div className="guide-content">
            <div className="guide-header">
                <div className="top-section">
                            <span className="guide-favorite-icon">
                                <IoMdStarOutline style={{width: '40px', height: '40px'}}/></span>
                    <div className="guide-character-name">{character.name}</div>
                </div>
                <div className="tab-navigation">
                    <div
                        className={`tab ${activeTab === 'Overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Overview')}
                    >
                        Overview
                    </div>
                    <div
                        className={`tab ${activeTab === 'Movelist' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Movelist')}
                    >
                        Movelist
                    </div>
                    <div
                        className={`tab ${activeTab === 'Combos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Combos')}
                    >
                        Combos
                    </div>
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'Overview' && (
                    <div className="overview-content">
                        <div className="image-container">
                            <img src={character.portrait} alt={`${character.name} Portrait`} className="guide-character-portrait"/></div>
                        <h2 className="overview-heading">Overview</h2>
                        <p>
                            {character.overview}
                        </p>
                    </div>
                )}
                {activeTab === 'Movelist' && <div>Movelist Content</div>}
                {activeTab === 'Combos' && <div>Combos Content</div>}
                    </div>
                    </div>
                    );
                };

export default CharacterGuide;
