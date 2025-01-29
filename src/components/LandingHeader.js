import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaFistRaised  } from 'react-icons/fa';
import '../styles/LandingHeader.css';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBellFill } from "react-icons/bs";


const LandingHeader = () => {
    const [isMobile, setIsMobile] = useState(false);
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
                                <li><a href="#characters">Characters</a></li>
                                <li><a href="#glossary">Glossary</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="right-side">
                    <input type="text" className="search-bar" placeholder="Search..."/>
                        <button className="fist">
                            <FaFistRaised />
                        </button>
                        <button className="bell">
                            <BsBellFill />
                        </button>
                    </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default LandingHeader;