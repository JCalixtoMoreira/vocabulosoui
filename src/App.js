import Select from 'react-select'
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';

import './App.css';

const options = []
for(var i=3; i<=23; i++) {
  options.push({ value: i.toString(), label:  i.toString() },);
}

function App() {
  return (
    <div className="App">
      <header >
        <HelpIcon />
      </header>
      <body>
        
        <div className="logo"> 
          <h1>Vocabuloso</h1>
        </div>
        <div className="opcoes">
          <div className="linha">
            <Select className="numLetras" options={options} />
            <p>Número de Letras</p>
          </div>
          <div className="linha">
            <p>Número de Palavras</p>
            <Select className="numPalavras" options={options} />
          </div>
          <div className="linha">
            <p>Número de Tentativas</p>
            <Select className="numTentativas" options={options} />
          </div>
          <div className="buttons">
            <Button variant="contained">Iniciar</Button>
            <Button variant="contained">Configurações</Button>
          </div>
        </div>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;