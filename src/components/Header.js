import React from "react";
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

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
                <HomeIcon onClick={navigateHome}/>
                <SettingsIcon onClick={navigateSettings}/>
                <HelpIcon onClick={navigateHelp}/>
            </header>
        </>
    )
};

export default Header;