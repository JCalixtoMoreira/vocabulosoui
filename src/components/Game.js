import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import Header from "./Header";
import Footer from "./Footer";
import Tentativa from './Tentativa';

const Game = () => {
  const { tamanho, qtd, tentativas } = useParams();
  const [palavras, setPalavras] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const [numJogada, setNumJogada] = useState(0);
  const [logs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/palavras/${tamanho}/${qtd}`)
      .then(res => {
        setPalavras(res.data);
      });
  }, [qtd, tamanho]);

  const handleSubmitTentativa = event => {
    event.preventDefault();
    let valido = false;
    if (tentativa.length === Number(tamanho)) {
      axios.get(`http://localhost:3001/palavras/${tentativa}`)
        .then(res => {
          valido = res.data;
          if (valido) {
            if (numJogada < tentativas) {
              if (numJogada === 0) {
                for (let i in palavras) {
                  logs.push({
                    palavra: palavras[i].conteudo,
                    tentativas: [tentativa]
                  })
                }
              } else {
                for (let i in palavras) {
                  logs[i].tentativas.push(tentativa);
                }
              }
              setNumJogada(numJogada + 1);
            } else {
              alert("Ultrapassou num de tentativas");
            }
          } else alert("Digite uma palavra válida");
        });
    } else {
      alert(`Digite uma palavra de tamanho ${tamanho}`);
    }
    setTentativa('');
  };

  return (
    <>
      <Header />
      <h2>{`Há ${tentativas} tentativas`}</h2>
      <body>
        <ul>
          {palavras.map(palavra => <li>{palavra.conteudo}</li>)}
        </ul>
        <form onSubmit={handleSubmitTentativa}>
          <input type="text" value={tentativa} onChange={event => {
            //@TODO precisa validar çÇ pq no bd esta trocado para cC
            if (!/[^a-zA-ZçÇ]/.test(event.target.value)) setTentativa(event.target.value);
          }} />
        </form>
        <ul>
          {logs.map((log, index) => {
            return (
              log.tentativas.map(tentativa => {
                return (<li ><Tentativa tentativa={tentativa} palavra={palavras[index].conteudo}/></li>);
              })
            );
          })}
        </ul>
      </body>
      <Footer />
    </>
  );
};

export default Game;