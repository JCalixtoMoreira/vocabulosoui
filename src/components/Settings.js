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
                <div className="logo">
                    <div className="square">V</div>
                    <div className="square">O</div>
                    <div className="square">C</div>
                    <div className="square">A</div>
                    <div className="square">B</div>
                    <div className="square">U</div>
                    <div className="square">L</div>
                    <div className="square">O</div>
                    <div className="square">S</div>
                    <div className="square">O</div>
                </div>
                <div className="logo">
                    <div className="square">C</div>
                    <div className="square">O</div>
                    <div className="square">N</div>
                    <div className="square">F</div>
                    <div className="square">I</div>
                    <div className="square">G</div>
                    <div className="square">U</div>
                    <div className="square">R</div>
                    <div className="square">A</div>
                    <div className="square">Ç</div>
                    <div className="square">Õ</div>
                    <div className="square">E</div>
                    <div className="square">S</div>
                </div>
                <section>
                    <FormGroup>
                        <FormControlLabel className="opcoes" control={<Checkbox />} label="Indicar Letras Repetidas" />
                        <FormControlLabel className="opcoes" control={<Checkbox />} label="Permitir Palavras Inexistentes" />
                        <FormControlLabel className="opcoes" control={<Checkbox />} label="Modo Difícil (Apenas para 1 Palavra)" />
                        <FormControlLabel className="opcoes" control={<Checkbox />} label="Modo Sandbox" />
                    </FormGroup>
                    <ModalSettings className='colors' setColor={setFundo} setIsOpen={setIsOpenFundo} modalIsOpen={modalIsOpenFundo} cor={fundo} text={"Cor de Fundo"} />
                    <ModalSettings className='colors' setColor={setLetra} setIsOpen={setIsOpenLetra} modalIsOpen={modalIsOpenLetra} cor={letra} text={"Cor de Letras"} />
                    <ModalSettings className='colors' setColor={setAcerto} setIsOpen={setIsOpenAcerto} modalIsOpen={modalIsOpenAcerto} cor={acerto} text={"Cor de Acerto"} />
                    <ModalSettings className='colors' setColor={setAcertoPosicao} setIsOpen={setIsOpenAcertoPosicao} modalIsOpen={modalIsOpenAcertoPosicao} cor={acertoPosicao} text={"Cor de Acerto e Posição"} />
                </section>

            </body>
            <Footer />
        </>
    );
};

export default Settings;