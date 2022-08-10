import React, { useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import './Home.css';

const optionsLetras = [{ value: '', lavel: '' }];
for (var i = 3; i <= 20; i++) {
    optionsLetras.push({ value: i.toString(), label: i.toString() },);
}

const optionsPalavras = [{ value: '', lavel: '' }];
for (i = 1; i <= 20; i++) {
    optionsPalavras.push({ value: i.toString(), label: i.toString() },);
}

const optionsTentativas = [{ value: '', lavel: '' }];
for (i = 1; i <= 4; i++) {
    optionsTentativas.push({ value: i.toString(), label: i.toString() },);
}

const Home = () => {
    const [tamanho, setTamanho] = useState('');
    const [quantidade, setQtd] = useState('');
    const [tentativa, setTentativa] = useState('');
    const [tentativaDisabled, setTentativaDisabled] = useState(true);
    const navigate = useNavigate();

    const navigateGame = () => {
        if (tamanho > 1 && quantidade > 1 && tentativa > 1) navigate(`/game/${tamanho}/${quantidade}/${tentativa}`);
        else alert("Selecione um valor para os campos de Número de Letras, Palavras e Tentativas");
    };

    const navigateHelp = () => {
        navigate('/help');
    };

    const navigateSettings = () => {
        navigate('/settings');
    };

    const handleChangeTamanho = (event) => {
        setTamanho(event.target.value);
    };

    const handleChangeQuantidade = event => {
        setQtd(event.target.value);
        if (event.target.value) setTentativaDisabled(false);
        else setTentativaDisabled(true);
    };

    const handleChangeTentativa = event => {
        setTentativa(event.target.value);
    };

    return (
        <>
            <body>
                <div className="container">
                    {/* <Header /> */}
                    <div className="centro">
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
                        <div className="opcoes">
                            <FormControl className="linha">
                                <InputLabel id="tamanho">Número de Letras</InputLabel>
                                <Select
                                    labelId="tamanho"
                                    id="tamanho"
                                    value={tamanho}
                                    label="Número de Letras"
                                    onChange={handleChangeTamanho}
                                    MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                                >
                                    {optionsLetras.map(option => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className="linha" >
                                <InputLabel id="quantidade">Número de Palavras</InputLabel>
                                <Select
                                    labelId="quantidade"
                                    id="quantidade"
                                    value={quantidade}
                                    label="Número de Palavras"
                                    onChange={handleChangeQuantidade}
                                    MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                                >
                                    {optionsPalavras.map(option => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className="linha">
                                <InputLabel id="tentativa">Número de Tentativas</InputLabel>
                                <Select
                                    labelId="tentativa"
                                    id="tentativa"
                                    value={tentativa}
                                    label="Número de Tentativas"
                                    onChange={handleChangeTentativa}
                                    disabled={tentativaDisabled}
                                    MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                                >
                                    {optionsTentativas.map(option => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button className="linha" onClick={navigateGame} variant="contained">Iniciar</Button>
                            <Button className="linha" onClick={navigateSettings} variant="contained">Opções</Button>
                            <Button className="linha" onClick={navigateHelp} variant="contained">Ajuda</Button>
                        </div>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
};

export default Home;