import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import Header from "./Header";
import Footer from "./Footer";
import Tentativa from './Tentativa';
import './Game.css';

const Game = () => {
  const { tamanho, qtd, tentativas } = useParams();
  const [palavras, setPalavras] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const [estadoJogo, setEstadoJogo] = useState('jogando');
  const [numJogada, setNumJogada] = useState(0);
  const [logs] = useState([]);

  useEffect(() => {
    axios.get(`https://vocabulosoapi.herokuapp.com/palavras/${tamanho}/${qtd}`)
      .then(res => {
        setPalavras(res.data);
      });
  }, [qtd, tamanho]);

  const handleSubmitTentativa = event => {
    event.preventDefault();
    let valido = false;
    if (tentativa.length === Number(tamanho)) {
      //@TODO trata uppercase no bd
      axios.get(`https://vocabulosoapi.herokuapp.com/palavras/${tentativa}`)
        .then(res => {
          valido = res.data;
          if (valido) {
            if (numJogada < tentativas) {
              if (numJogada === 0) {
                for (let i in palavras) {
                  logs.push({
                    palavra: palavras[i].conteudo,
                    tentativas: [tentativa],
                    achado: palavras[i].conteudo === tentativa
                  });
                }
              } else {
                for (let i in palavras) {
                  if (!logs[i].achado) {
                    logs[i].tentativas.push(tentativa);
                    if (!logs[i].achado) logs[i].achado = palavras[i].conteudo === tentativa;
                  }
                }
                let achados = logs.filter((el) => { return el.achado; }).length
                if (achados === palavras.length) setEstadoJogo("ganho");
                else {
                  if (numJogada === (tentativas - 1)) setEstadoJogo("perda");
                }
              }
            } else {
              setEstadoJogo("perda");
            }
            setNumJogada(numJogada + 1);
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
      <h2>{`Há ${tentativas - numJogada} tentativas restantes`}</h2>
      <body>
        {(() => {
          switch (estadoJogo) {
            case 'ganho':
              return (
                <h2>ganhou!</h2>
              );
            case 'perda':
              return (
                <h2>perdeu!</h2>
              );
            default:
              return (
                <>
                  <ul>
                    {palavras.map(palavra => <li>{palavra.conteudo}</li>)}
                  </ul>
                  <form onSubmit={handleSubmitTentativa}>
                    <input type="text" value={tentativa} onChange={event => {
                      //@TODO precisa validar çÇ pq no bd esta trocado para cC
                      if (!/[^a-zA-ZçÇ]/.test(event.target.value)) setTentativa(event.target.value);
                    }} />
                  </form>
                  <div className="tentativas">
                    {logs.map((log, index) => {
                      return (
                        <ul id={index} className="tentativa">
                          {log.tentativas.map(tentativa => {
                            return (<Tentativa tentativa={tentativa} palavra={palavras[index].conteudo} />);
                          })}
                        </ul>
                      );
                    })}
                  </div>
                </>
              );
          }
        })()}
      </body>
      <Footer />
    </>
  );
};

export default Game;