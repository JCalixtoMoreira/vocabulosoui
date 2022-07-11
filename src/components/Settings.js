import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

import Header from "./Header";
import Footer from "./Footer";

const Settings = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <body>
                <h3>Configuracoes</h3>
            </body>
            <div className="buttons">
                <Button onClick={navigateHome} variant="contained">Início</Button>
            </div>
            <Footer />
        </>
    );
};

export default Settings;