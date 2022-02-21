import './App.css';
import React, { Component } from 'react';

/* const functionOne = (ev) => console.log('Funcionou!!!');
const functionTwo = (ev) => console.log('Funcionou de novo!!!');
const functionThree = (ev) => console.log('Funcionou mais uma vez!!!'); */

class App extends Component {
  constructor() {
    super()
    this.functionOne = this.functionOne.bind(this);
    this.functionTwo = this.functionTwo.bind(this);
    this.functionThree = this.functionThree.bind(this);
  }

  functionOne() { console.log('Funcionou!!!', this); }
  functionTwo() { console.log('Funcionou de novo!!!', this); }
  functionThree() { console.log('Funcionou mais uma vez!!!', this); }

  render() { 
    return (
      <div className="App">
{/*         <button onClick={functionOne}>Botão 1</button>
        <button onClick={functionTwo}>Botão 2</button>
        <button onClick={functionThree}>Botão 3</button> */}
        <button onClick={this.functionOne}>Botão 1</button>
        <button onClick={this.functionTwo}>Botão 2</button>
        <button onClick={this.functionThree}>Botão 3</button>
      </div>);
  }
}

export default App;
