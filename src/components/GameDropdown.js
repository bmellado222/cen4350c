import React, {useState} from "react";
import '../styles/GameDropdown.css';
import {IoMdStarOutline} from "react-icons/io";

const GameDropdown = ({ game, characters }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCharacterClick = (characterId) => {
        window.location.href = `/characters/${characterId}`;
    };

    return (
        <div className="dropdown-container">
            <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? 'open' : ''}`}>
                <img src={game.logo} alt={`${game.name} Logo`} className="game-logo" />
                <span className="game-name">{game.name}</span>
                <span className={`chevron ${isOpen ? 'up' : 'down'}`}>⌄</span>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {characters.map((character) => (
                        <button key={character.id} className="actor-item" onClick={() => handleCharacterClick(character.id)}>
                            <img src={character.portrait} alt={`${character.name} Portrait`} className="actor-portrait" />
                            <span className="character-name">{character.name}</span>
                            <span className="favorite-icon"><IoMdStarOutline /></span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GameDropdown;
