import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaFistRaised  } from 'react-icons/fa';
import axios from 'axios';
import '../styles/LandingHeader.css';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBellFill } from "react-icons/bs";

const LandingHeader = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1100);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const backHome = () => {
        if (location.pathname === '/') {
            if(window.scrollY !== 0) {
                window.scrollTo({ top:0, behavior: 'smooth'})
            }
        } else {
            navigate('/');
        }
    }

    const handleSearch = async (e) => {
        const searchQuery = e.target.value.trim();
        setQuery(searchQuery);

        if (searchQuery === '') {
            setResults([]);
            setShowDropdown(false);
            return;
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/search`, {
                params: { query: searchQuery },
            });

            if (response.data && Object.keys(response.data).length > 0) {
                setResults(response.data);
            } else {
                setResults([]);
            }

            setShowDropdown(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };


    const handleResultClick = (type, item) => {
        let basePath = '/';

        switch (type) {
            case 'articles':
                basePath = `/articles/search?query=${item.articleTitle || item.id}`;
                break;
            case 'glossaryTerms':
                basePath = `/glossary/search?query=${item.termName || item.id}`;
                break;
            case 'fightingGames':
                basePath = `/games/search?query=${item.fightingGameTitle || item.id}`;
                break;
            case 'fightingCharacters':
                basePath = `/characters/search?query=${item.fightingCharacterName || item.id}`;
                break;
            default:
                console.error('Unknown type:', type);
                return;
        }
        navigate(basePath); // Navigate to the generated path

        setQuery('');
        setShowDropdown(false);
    };







    return (
        <header className="landing-header">
            <div className="header-content">
                {isMobile ? (
                    <>
                        <div className="left-side">
                        <button className="hamburger">
                            <FaBars/>
                        </button>
                        <button className="website-title" onClick={backHome}>
                            Janken
                        </button>
                        </div>
                        <div className="right-side">
                        <button className="magnifying-glass">
                            <HiMagnifyingGlass/>
                        </button>
                        <button className="fist">
                            <FaFistRaised />
                        </button>
                        <button className="bell">
                            <BsBellFill />
                        </button>
                        </div>
                    </>
                ) : (
                    <>
                    <div className="left-side">
                    <button className="website-title" onClick={backHome}>
                            Janken
                        </button>
                        <nav className="nav">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/characters">Characters</a></li>
                                <li><a href="/glossary">Glossary</a></li>
                            </ul>
                        </nav>
                    </div>
                        <div className="right-side">
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Search..."
                                value={query}
                                onChange={handleSearch}
                                onFocus={() => setShowDropdown(true)}
                                onBlur={(e) => {
                                    const dropdown = document.querySelector('.dropdown-search');
                                    if (!dropdown || !dropdown.contains(e.relatedTarget)) {
                                        setShowDropdown(false);
                                    }
                                }}
                            />


                            {showDropdown && query.trim() !== '' && (
                                <div className="dropdown-search">
                                    {Object.keys(results).length > 0 ? (
                                        Object.entries(results).map(([type, items]) =>
                                            items.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="dropdown-search-item"
                                                    onMouseDown={() => handleResultClick(type, item)}
                                                >
                                                    {item.articleTitle || item.termName || item.fightingGameTitle || item.fightingCharacterName}
                                                </div>

                                            ))
                                        )
                                    ) : (
                                        <div className="dropdown-search-item no-results">No results were found.</div>
                                    )}
                                </div>
                            )}

                            <button className="fist">
                                <FaFistRaised/>
                            </button>
                            <button className="bell">
                                <BsBellFill/>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default LandingHeader;