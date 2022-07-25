import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Header from "./Header";
import Footer from "./Footer";
import ModalSettings from "./ModalSettings";
import './Settings.css';

/* Modal.setAppElement('#modalAppended'); */

const Settings = () => {
    const [fundo, setFundo] = useState({ hex: "#000000" });
    const [modalIsOpenFundo, setIsOpenFundo] = useState(false);
    const [letra, setLetra] = useState({ hex: "#000000" });
    const [modalIsOpenLetra, setIsOpenLetra] = useState(false);
    const [acerto, setAcerto] = useState({ hex: "#000000" });
    const [modalIsOpenAcerto, setIsOpenAcerto] = useState(false);
    const [acertoPosicao, setAcertoPosicao] = useState({ hex: "#000000" });
    const [modalIsOpenAcertoPosicao, setIsOpenAcertoPosicao] = useState(false);

    return (
        <>
            <Header />
            <body>
                <h3>Opcoes Adicionais</h3>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Indicar Letras Repetidas" />
                    <FormControlLabel control={<Checkbox />} label="Permitir Palavras Inexistentes" />
                    <FormControlLabel control={<Checkbox />} label="Modo Difícil (Apenas para 1 Palavra)" />
                    <FormControlLabel control={<Checkbox />} label="Modo Sandbox" />
                </FormGroup>
                <ModalSettings setColor={setFundo} setIsOpen={setIsOpenFundo} modalIsOpen={modalIsOpenFundo} cor={fundo}/>
                <ModalSettings setColor={setLetra} setIsOpen={setIsOpenLetra} modalIsOpen={modalIsOpenLetra} cor={letra}/>
                <ModalSettings setColor={setAcerto} setIsOpen={setIsOpenAcerto} modalIsOpen={modalIsOpenAcerto} cor={acerto}/>
                <ModalSettings setColor={setAcertoPosicao} setIsOpen={setIsOpenAcertoPosicao} modalIsOpen={modalIsOpenAcertoPosicao} cor={acertoPosicao}/>
            </body>
            <Footer />
        </>
    );
};

export default Settings;