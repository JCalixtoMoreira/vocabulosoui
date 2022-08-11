import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import './Help.css'
const Help = () => {
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
                    <div className="square">R</div>
                    <div className="square">E</div>
                    <div className="square">G</div>
                    <div className="square">R</div>
                    <div className="square">A</div>
                    <div className="square">S</div>
                </div>
                <p>Descubra a palavra misteriosa! Após cada tentativa, as letras mudarão de acordo, mostrando o quão perto você está da solução</p><br />
                <p>EX: <strong>COI<span style={{ color: "green" }} >S</span>A</strong></p><br />
                <p>Nesse exemplo, a letra O faz parte da palavra e está na posição correta (em verde)</p><br />
                <p>EX: <strong>TU<span style={{ color: "darkgoldenrod" }}>N</span>EL</strong></p><br />
                <p>Nesse outro exemplo, a letra N está presente na palavra, porém ela não está na posição correta (em amarelo).</p><br />
                <p>Acentos são preenchidos automaticamente em cada tentativa, e as palavras também podem possuir letras repetidas!</p>
                <ul>
                    <p><strong>Número de Letras:</strong> Essa opção define o número de letras que a palavra misteriosa terá, podendo variar de X letras até Y letras. Para iniciantes recomenda-se 4-5 letras</p>

                    <p><strong>Número de Palavras:</strong> Essa opção define o número de palavras que serão jogadas ao mesmo tempo pelo jogador, podendo variar de 1 palavra até Z palavras. Para iniciantes recomenda-se começar com 1 palavra e ir aumentando de acordo.</p>

                    <p><strong>Número de Tentativas:</strong> Essa opção define o número de tentativas que o jogador tem para tentar adivinhar a palavra misteriosa, recomenda-se 4 tentativas a mais do número mínimo necessário (Ex: Para 2 palavras, recomenda-se 6 tentativas, 2+4).</p>

                    <p>Ao selecionar o número de palavras, o número de tentativas será automaticamente modificado para o número recomendado também.</p>

                </ul>
            </body>
            <Footer />
        </>
    )
};

export default Help;