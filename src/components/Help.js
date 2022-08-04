import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Help = () => {
    return (
        <>
            <Header />
            <body>
                <p>Descubra a palavra misteriosa! Após cada tentativa, as letras mudarão de acordo, mostrando o quão perto você está da solução</p><br/>
                <p>EX: <strong>COI<span style={{ color: "green" }} >S</span>A</strong></p><br/>
                <p>Nesse exemplo, a letra O faz parte da palavra e está na posição correta (em verde)</p><br/>
                <p>EX: <strong>TU<span style={{ color: "yellow" }}>N</span>EL</strong></p><br/>
                <p>Nesse outro exemplo, a letra N está presente na palavra, porém ela não está na posição correta (em amarelo).</p><br/>
                <p>Acentos são preenchidos automaticamente em cada tentativa, e as palavras também podem possuir letras repetidas!</p>
                <ul>
                    <li>
                        <p><strong>Número de Letras:</strong>Essa opção define o número de letras que a palavra misteriosa terá, podendo variar de X letras até Y letras. Para iniciantes recomenda-se 4-5 letras</p>
                    </li>
                    <li>
                        <p><strong>Número de Palavras:</strong>Essa opção define o número de palavras que serão jogadas ao mesmo tempo pelo jogador, podendo variar de 1 palavra até Z palavras. Para iniciantes recomenda-se começar com 1 palavra e ir aumentando de acordo.</p>
                    </li>
                    <li>
                        <p><strong>Número de Tentativas:</strong>Essa opção define o número de tentativas que o jogador tem para tentar adivinhar a palavra misteriosa, recomenda-se 4 tentativas a mais do número mínimo necessário (Ex: Para 2 palavras, recomenda-se 6 tentativas, 2+4).</p>
                    </li>
                    <li>
                        <p>Ao selecionar o número de palavras, o número de tentativas será automaticamente modificado para o número recomendado também.</p>
                    </li>
                </ul>
            </body>
            <Footer />
        </>
    )
};

export default Help;