import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/GameDropdown.css';
import {IoMdStarOutline} from "react-icons/io";

const GameDropdown = ({ game, characters }) => {
    console.log("Characters received for dropdown:", characters);
    console.log("Games received for dropdown:", game);

    const navigate = useNavigate();
    const handleCharacterClick = (characterId, fightingCharacterName) => {
        navigate(`/characters/${characterId}-${fightingCharacterName.replace(/\s+/g, '-')}`);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);


    return (
        <div className="dropdown-container">
            <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? 'open' : ''}`}>
                <img src={game.fightingGameLogo} alt={`${game.fightingGameTitle} Logo`} className="characters-game-logo" />
                <span className="game-name">{game.fightingGameTitle}</span>
                <span className={`characters-chevron ${isOpen ? 'up' : 'down'}`}>⌄</span>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {characters.map((character) => (
                        <button key={character.fightingCharacterId} className="character-item" onClick={() => handleCharacterClick(character.fightingCharacterId, character.fightingCharacterName)}>
                            <img src={character.fightingCharacterPortraitUrl} alt={`${character.fightingCharacterName} Portrait`} className="character-portrait" />
                            <span className="character-name">{character.fightingCharacterName}</span>
                            <span className="characters-favorite-icon">
                                <IoMdStarOutline style={{ width: '40px', height: '40px' }} /></span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GameDropdown;
