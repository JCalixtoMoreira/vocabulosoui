import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Settings from "./components/Settings";
import Help from "./components/Help";
import Game from "./components/Game";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/game/:tamanho/:qtd/:tentativas" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;