import React, { useState, useCallback } from 'react';
import SignPopUp from '../signPopUp/signPopUp';
import './topNavbar.css';

const TopNavbar: React.FC = () => {
    const [isPopedUp, setIsPopedUp] = useState(false);
    const [popUpSource, setPopUpSource] = useState('');

    const handleOpenPopup = useCallback((source: string) => {
        setPopUpSource(source);
        setIsPopedUp(true);
    }, []);

    const handleClosePopup = useCallback(() => {
        setIsPopedUp(false);
        setPopUpSource('');
    }, []);

    return (
        <nav className="navbar">
            <SignPopUp open={isPopedUp} source={popUpSource} onClose={handleClosePopup} />
            <div className="container">
                <div className="logo">Athlete Buzz</div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="  Search ..."
                        className="search-input"
                    />
                </div>
                <div className="auth-buttons flex justify-around">
                    <button className="login-btn" onClick={() => handleOpenPopup('log in')}>
                        Log In
                    </button>
                    <button className="signup-btn" onClick={() => handleOpenPopup('sign up')}>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
