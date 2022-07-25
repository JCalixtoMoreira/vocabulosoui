import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

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
    const [tamanho, setTamanho] = useState(0);
    const [quantidade, setQtd] = useState(0);
    const [tentativa, setTentativa] = useState(0);
    const [tentativaOn, setTentativaOn] = useState("disabled")
    const navigate = useNavigate();

    const navigateGame = () => {
        if(tamanho > 0 && quantidade > 0 && tentativa > 0) navigate(`/game/${tamanho}/${quantidade}/${tentativa}`);
        else alert("Selecione um valor para os campos de Número de Letras, Palavras e Tentativas");
    };

    const handleChangeTamanho = event => {
        setTamanho(event.target.value);
    };

    const handleChangeQuantidade = event => {
        setQtd(event.target.value);
        if (event.target.value) setTentativaOn("");
        else setTentativaOn("disabled");
    };

    const handleChangeTentativa = event => {
        setTentativa(event.target.value);
    };

    return (
        <>
            <Header />
            <body>
                <div className="logo">
                    <h1>Vocabuloso</h1>
                </div>
                <div className="opcoes">
                    <div className="linha">
                        <p>Número de Letras</p>
                        <select value={tamanho} onChange={handleChangeTamanho}>
                            {optionsLetras.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="linha">
                        <p>Número de Palavras</p>
                        <select value={quantidade} onChange={handleChangeQuantidade}>
                            {optionsPalavras.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="linha">
                        <p>Número de Tentativas</p>
                        <select value={tentativa} onChange={handleChangeTentativa} disabled={tentativaOn}>
                            {optionsTentativas.map(option => (
                                <option key={option.value} value={!!Number(option.value) ? Number(option.value) + Number(quantidade) : option.value}>
                                    {!!Number(option.label) ? Number(option.label) + Number(quantidade) : option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="buttons">
                        <Button onClick={navigateGame} variant="contained">Iniciar</Button>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
};

export default Home;