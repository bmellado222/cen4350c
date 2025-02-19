import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/GameDropdown.css';
import {IoMdStarOutline} from "react-icons/io";

const GameDropdown = ({ game, characters }) => {
    const navigate = useNavigate();
    const handleCharacterClick = (characterId) => {
        navigate(`/characters/${characterId}`);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);


    return (
        <div className="dropdown-container">
            <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? 'open' : ''}`}>
                <img src={game.logo} alt={`${game.name} Logo`} className="characters-game-logo" />
                <span className="game-name">{game.name}</span>
                <span className={`characters-chevron ${isOpen ? 'up' : 'down'}`}>⌄</span>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {characters.map((character) => (
                        <button key={character.id} className="character-item" onClick={() => handleCharacterClick(character.id)}>
                            <img src={character.portrait} alt={`${character.name} Portrait`} className="character-portrait" />
                            <span className="character-name">{character.name}</span>
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
