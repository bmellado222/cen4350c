import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from 'axios';
import '../styles/CharacterGuide.css';
import {IoMdStarOutline} from "react-icons/io";

const CharacterGuide = () => {
    const { characterId } = useParams();

    const [fightingCharacter, setFightingCharacter] = useState([]);
    const [characterMove, setCharacterMove] = useState([]);
    const [characterCombo, setCharacterCombo] = useState([]);
    const [moveNotationImage, setMoveNotationImage] = useState([]);
    const [comboNotationImage, setComboNotationImage] = useState([]);
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
                    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/search`, { params: { query } });
                    setFightingCharacter(response.data.fightingCharacters[0] || {});
                    await fetchMoves(fightingCharacter.fightingCharacterId, setCharacterMove, setMoveNotationImage);
                    await fetchCombos(fightingCharacter.fightingCharacterId, setCharacterCombo, setComboNotationImage);

                } else if (characterId) {
                    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/fighting-characters`);
                    const characters = response.data || [];
                    const character = characters.find((char) => char.fightingCharacterId === parseInt(characterId));
                    if (character) {
                        setFightingCharacter(character);
                        await fetchMoves(character.fightingCharacterId, setCharacterMove, setMoveNotationImage);
                        await fetchCombos(character.fightingCharacterId, setCharacterCombo, setComboNotationImage);

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
    }, [location, query, characterId, fightingCharacter.fightingCharacterId]);


    const fetchMoves = async (characterId, setCharacterMove, setMoveNotationImage) => {
        try {
            const movesResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/character-moves`);
            const allMoves = movesResponse.data;
            console.log("All Moves:", allMoves);

            const filteredMoves = allMoves.filter(move =>
                move.FightingCharacter_fightingCharacterId.fightingCharacterId === characterId
            );

            console.log("Specific Moves:", filteredMoves);
            setCharacterMove(filteredMoves);

            if (filteredMoves.length > 0) {
                const moveInputs = filteredMoves.map(move => move.moveInputSequence);
                const notationResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/character-moves/notation-images`, {
                    params: { moveInputSequence: moveInputs.join(",") }
                });

                console.log("Raw Move Notation Response:", notationResponse.data);

                const formattedMoveURLs = formatNotationImages(filteredMoves, notationResponse.data, "moveInputSequence");

                setMoveNotationImage(formattedMoveURLs);
                console.log("Formatted Move Notations:", formattedMoveURLs);
            }
        } catch (error) {
            console.error("An error occurred whilst fetching moves:", error);
        }
    };

    const fetchCombos = async (characterId, setCharacterCombo, setComboNotationImage) => {
        try {
            const combosResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/character-combos`);
            const allCombos = combosResponse.data;
            console.log("All Combos:", allCombos);

            const filteredCombos = allCombos.filter(combo =>
                combo.FightingCharacter_fightingCharacterId.fightingCharacterId === characterId
            );

            console.log("Specific Combos:", filteredCombos);
            setCharacterCombo(filteredCombos);

            if (filteredCombos.length > 0) {
                const comboInputs = filteredCombos.map(combo => combo.characterComboSequence);
                const comboNotationResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/character-combos/notation-images`, {
                    params: { characterComboSequence: comboInputs.join(",") }
                });
                console.log("Raw Combo Notation Response:", comboNotationResponse.data);

                const formattedComboURLs = formatNotationImages(filteredCombos, comboNotationResponse.data, "characterComboSequence");
                setComboNotationImage(formattedComboURLs);
                console.log("Formatted Combo Notations:", formattedComboURLs);
            }
        } catch (error) {
            console.error("An error occurred whilst fetching combos:", error);
        }
    };

    const formatNotationImages = (filteredItems, notationResponseData, sequenceKey) => {
        return filteredItems.map(item => {
            const notationParts = item[sequenceKey].split(",");
            return notationResponseData.splice(0, notationParts.length).map(url =>
                url.replace("https://drive.google.com/uc?id=", "https://lh3.googleusercontent.com/d/")
            );
        });
    };


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
                        <div className="portrait-container">
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
                        {characterMove.map((move, moveIndex) => (
                            <div key={move.characterMoveId} className="move-container">
                                <span className="character-move-name">{move.characterMoveName}</span>

                                <div className="move-attributes">
                                    <div className="move-attribute"><span
                                        className="attribute-header">Damage</span> {move.characterMoveDamage}</div>
                                    <div className="move-attribute"><span
                                        className="attribute-header">Hit Level</span> {move.characterMoveHitLevel}</div>
                                    <div className="move-attribute"><span
                                        className="attribute-header">Startup</span> {move.characterMoveStartup}</div>
                                    <div className="move-attribute"><span
                                        className="attribute-header">On-Hit</span> {move.characterMoveOnHit}</div>
                                    <div className="move-attribute"><span
                                        className="attribute-header">Recovery</span> {move.characterMoveRecovery}</div>
                                </div>

                                <p className="character-move-description"
                                   dangerouslySetInnerHTML={{__html: move.characterMoveDescription}}/>

                                <div className="move-notation-sequence">
                                    {moveNotationImage[moveIndex]?.map((imgUrl, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={imgUrl}
                                            alt={`Notation for ${move.characterMoveName} - Part ${imgIndex + 1}`}
                                            className="move-notation"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                 )}
                {activeTab === 'Combos' && (
                    <div className="combos-content">
                        <div className="combo-notation-container">
                            {characterCombo.map((combo, comboIndex) => (
                                <div key={combo.characterComboId}>
                                    <span className="character-combo">{combo.characterComboStart}</span>
                                    <span className="character-combo-damage">{combo.characterComboDamage}</span>
                                    <span className="character-combo-hits">{combo.characterComboHitCount}</span>
                                    <span className="character-combo-difficulty">{combo.characterComboDifficulty}</span>

                                    <div className="combo-notation-sequence">
                                        {comboNotationImage[comboIndex]?.map((imgUrl, imgIndex) => (
                                            <img
                                                key={imgIndex}
                                                src={imgUrl}
                                                alt={`Notation for Combo ${combo.characterComboId} - Part ${imgIndex + 1}`}
                                                className="combo-notation"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>)
};

export default CharacterGuide;
