import './App.css';
import React, { Component } from 'react';

const functionOne = (ev) => console.log('Funcionou!!!');
const functionTwo = (ev) => console.log('Funcionou de novo!!!');
const functionThree = (ev) => console.log('Funcionou mais uma vez!!!');

class App extends Component {
  render() { 
    return (
      <div className="App">
        <button onClick={functionOne}>Botão 1</button>
        <button onClick={functionTwo}>Botão 2</button>
        <button onClick={functionThree}>Botão 3</button>
      </div>);
  }
}

export default App;
