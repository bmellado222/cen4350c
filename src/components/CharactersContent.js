import React from 'react';
import '../styles/CharactersContent.css';
import generateFakeData from './fakeGame';
import GameDropdown from "./GameDropdown";
import { gamesStatic } from './staticGame'


const CharactersContent = () => {
    const games = generateFakeData();

    return (
        <div className="characters-content">
            <div className="characters-container">
                {gamesStatic.map((game, index) => (
                    <div className="games-container" key={index}>
                        <GameDropdown game={game} characters={game.characters} />
                    </div>
                ))}
                {games.map(({ game, characters }, index) => (
                    <div className="games-container" key={index}>
                        <GameDropdown game={game} characters={characters} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharactersContent;
