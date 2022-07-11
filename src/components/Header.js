import React from "react";
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const navigateHelp = () => {
        navigate('/help');
    };

    return (
        <>
            <header >
                <HelpIcon onClick={navigateHelp} />
            </header>
        </>
    )
};

export default Header;