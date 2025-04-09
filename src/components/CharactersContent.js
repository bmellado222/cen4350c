import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import '../styles/CharactersContent.css';
import GameDropdown from "./GameDropdown";


const CharactersContent = () => {
    const [fightingGames, setFightingGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                if (location.pathname === '/games/search' && query) {
                    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/search`, {
                        params: { query },
                    });
                    console.log('API Response:', response.data);

                    const games = response.data.fightingGames || [];

                    const charactersResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-characters`);
                    const characters = charactersResponse.data;

                    if (Array.isArray(games) && Array.isArray(characters)) {
                        const mergedGames = games.map((game) => ({
                            ...game,
                            characters: characters.filter(
                                (char) =>
                                    char.FightingGames_fightingGameId.fightingGameId === game.fightingGameId
                            ),
                        }));
                        setFightingGames(mergedGames);
                    } else {
                        console.error('Invalid response structure:', games, characters);
                        setError('Unexpected response format.');
                    }
                } else {
                    const [gamesResponse, charactersResponse] = await Promise.all([
                        axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-games`),
                        axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-characters`),
                    ]);

                    const games = gamesResponse.data || [];
                    const characters = charactersResponse.data || [];

                    const mergedGames = games.map((game) => ({
                        ...game,
                        characters: characters.filter(
                            (char) =>
                                char.FightingGames_fightingGameId.fightingGameId === game.fightingGameId
                        ),
                    }));

                    setFightingGames(mergedGames);
                }
            } catch (error) {
                setError('Failed to load data.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        const promise = fetchData();
        promise.catch((error) => console.error('Unhandled promise rejection:', error));
    }, [location, query]);






    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!loading && fightingGames.length === 0) return <div>No games found.</div>;

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
