import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from 'axios';
import '../styles/CharacterGuide.css';
import {IoMdStarOutline} from "react-icons/io";

const CharacterGuide = () => {
    const { characterId } = useParams();

    const [fightingCharacter, setFightingCharacter, characterMove, setCharacterMove, characterCombo, setCharacterCombo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (location.pathname === '/characters/search' && query) {
                    // Handle the search-based logic
                    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/search`, { params: { query } });
                    setFightingCharacter(response.data.fightingCharacters[0] || {});

                    const movesResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/character-moves`);
                    const allMoves = movesResponse.data;

                    const filteredMoves = allMoves.filter(move =>
                        move.FightingCharacter_fightingCharacterId && // Ensure the property exists
                        move.FightingCharacter_fightingCharacterId.fightingCharacterId === fightingCharacter.fightingCharacterId
                    );



                    console.log('Search API Response:', response.data);
                    console.log('All Moves:', allMoves);
                    console.log('Specific Moves:', filteredMoves);
                } else if (characterId) {
                    // Fetch the character by ID
                    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-characters`);
                    const characters = response.data || [];

                    // Find the character by ID
                    const character = characters.find((char) => char.fightingCharacterId === parseInt(characterId));
                    if (character) {
                        setFightingCharacter(character);
                    } else {
                        setError('Character not found.');
                    }
                }
            } catch (error) {
                setError('Failed to load character guide.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };


        const promise = fetchData();
        promise.catch((error) => console.error('Unhandled promise rejection:', error));
    }, [location, query, characterId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!loading && !fightingCharacter?.fightingCharacterName) return <div>No character found.</div>;

    return (
        <div className="guide-content">
            <div className="guide-header">
                <div className="top-section">
                            <span className="guide-favorite-icon">
                                <IoMdStarOutline style={{width: '40px', height: '40px'}}/></span>
                    <div className="guide-character-name">{fightingCharacter.fightingCharacterName}</div>
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
                            <img src={fightingCharacter.fightingCharacterPortraitUrl}
                                 alt={`${fightingCharacter.fightingCharacterName} Portrait`}
                                 className="guide-character-portrait"/></div>
                        <h2 className="overview-heading">Overview</h2>
                        <p dangerouslySetInnerHTML={{__html: fightingCharacter.fightingCharacterOverview}}/>
                        <div className="strengths-weaknesses-bar">
                            <div className="strengths">
                                <h3>Strengths</h3>
                                <p dangerouslySetInnerHTML={{__html: fightingCharacter.fightingCharacterStrength}}/>
                            </div>
                            <div className="separator-line"></div>
                            <div className="weaknesses">
                                <h3>Weaknesses</h3>
                                <p dangerouslySetInnerHTML={{__html: fightingCharacter.fightingCharacterWeakness}}/>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'Movelist' && (
                    <div className="movelist-content">


                    </div>)}
                {activeTab === 'Combos' && <div>Combos Content</div>}
            </div>
        </div>
    );
};

export default CharacterGuide;
