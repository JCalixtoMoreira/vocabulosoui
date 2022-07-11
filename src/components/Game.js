import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import Header from "./Header";
import Footer from "./Footer";

const Game = () => {
  const { tamanho, qtd, tentativas } = useParams();
  const [palavras, setPalavras] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/palavras/${tamanho}/${qtd}`)
      .then(res => {
        setPalavras(res.data);
      })
  }, []);

  return (
    <>
      <Header />
      <h2>{`Há ${tentativas} tentativas`}</h2>
      <body>
        <ul>
          {palavras.map(palavra => <li>{palavra.conteudo}</li>)}
        </ul>
      </body>
      <Footer />
    </>
  );
};

export default Game;