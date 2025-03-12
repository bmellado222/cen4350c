import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CharactersContent.css';
import GameDropdown from "./GameDropdown";


const CharactersContent = () => {
    const [fightingGames, setFightingGames] = useState([]);

    useEffect(() => {
        Promise.all([
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-games`),
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-characters`)
        ])
            .then(([gamesResponse, charactersResponse]) => {
                const games = gamesResponse.data;
                const characters = charactersResponse.data;

                const mergedGames = games.map((game) => ({
                    ...game,
                    characters: characters.filter(
                        (char) => char.FightingGames_fightingGameId.fightingGameId === game.fightingGameId
                    ),
                }));

                setFightingGames(mergedGames);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="characters-content">
            <div className="characters-container">
                {fightingGames.map((game, index) => (
                    <div className="games-container" key={index}>
                        <GameDropdown game={game} characters={game.characters} />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default CharactersContent;
