import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    palavras: [],
    tamanho: 0,
    quantidade: 0
  }

  componentDidMount() {
    axios.get(`localhost:3001/palavras/${this.tamanho}/${this.quantidade}`)
      .then(res => {
        const palavras = res.data;
        this.setState({ palavras });
      })
  }

  render() {
    return (
      <ul>
        { this.state.palavras.map(palavra => <li>{palavra.conteudo}</li>)}
      </ul>
    )
  }
}