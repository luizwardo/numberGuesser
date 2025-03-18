import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [tentativa, setTentativa] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const iniciarJogo = () => {
    const minValue = parseInt(document.getElementById("min").value) || 1;
    const maxValue = parseInt(document.getElementById("max").value) || 100;

    setMin(minValue);
    setMax(maxValue);
    const novaTentativa = Math.floor((minValue + maxValue) / 2);
    setTentativa(novaTentativa);
    setMensagem(`O número é ${novaTentativa}?`);
  };

  const menor = () => {
    setMax(tentativa - 1);
    novoPalpite(tentativa - 1, min);
  };

  const maior = () => {
    setMin(tentativa + 1);
    novoPalpite(max, tentativa + 1);
  };

  const novoPalpite = (novoMax, novoMin) => {
    if (novoMin > novoMax) {
      setMensagem("Algo deu errado! Revise suas respostas.");
      return;
    }

    const novaTentativa = Math.floor((novoMin + novoMax) / 2);
    setTentativa(novaTentativa);
    setMensagem(`O número é ${novaTentativa}?`);
  };

  const acertou = () => {
    setMensagem(`O computador acertou! O número era ${tentativa}. 🎉`);
  };

  return (
    <div id="container">
      <h1>
        <div id="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div id='NG'>Number Guesser</div>
        
      </h1>

      <p>Pense em um número e tentarei adivinhar!</p>
      <p>Defina o intervalo:</p>

      <input type="number" id="min" placeholder="Mínimo" />
      <input type="number" id="max" placeholder="Máximo" />

      <button id="botaoInicio" onClick={iniciarJogo}>⏵</button>

      <h2 id="palpite">{mensagem}</h2>

      <button id="botaoMenor" onClick={menor}>Menor</button>
      <button id="botaoMaior" onClick={maior}>Maior</button>
      <button id="botaoAcerto" onClick={acertou}>Acertou!</button>
    </div>
  );
}

export default App;

