import React from "react";
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const navigateHelp = () => {
        navigate('/help');
    };

    const navigateSettings = () => {
        navigate('/settings');
    };

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <>
            <header >
                <div className="icons">
                <HomeIcon className="navIcon" onClick={navigateHome}/>
                <SettingsIcon className="navIcon" onClick={navigateSettings}/>
                <HelpIcon className="navIcon" onClick={navigateHelp}/>
                </div>
            </header>
        </>
    )
};

export default Header;