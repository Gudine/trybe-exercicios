import './App.css';
import React, { Component } from 'react';

/* const functionOne = (ev) => console.log('Funcionou!!!');
const functionTwo = (ev) => console.log('Funcionou de novo!!!');
const functionThree = (ev) => console.log('Funcionou mais uma vez!!!'); */

class App extends Component {
  constructor() {
    super()

    this.state = { btnOne: 0, btnTwo: 0, btnThree: 0 };

    this.functionOne = this.functionOne.bind(this);
    this.functionTwo = this.functionTwo.bind(this);
    this.functionThree = this.functionThree.bind(this);
  }

  functionOne() {
    this.setState((prev, _props) => ({ btnOne: prev.btnOne + 1 }))
  }
  functionTwo() {
    this.setState((prev, _props) => ({ btnTwo: prev.btnTwo + 1 }))
  }
  functionThree() {
    this.setState((prev, _props) => ({ btnThree: prev.btnThree + 1 }))
  }

  render() {
    const { btnOne, btnTwo, btnThree } = this.state;

    return (
      <div className="App">
{/*         <button onClick={functionOne}>Botão 1</button>
        <button onClick={functionTwo}>Botão 2</button>
        <button onClick={functionThree}>Botão 3</button> */}
        <button onClick={this.functionOne}>Botão 1: {btnOne} cliques</button>
        <button onClick={this.functionTwo}>Botão 2: {btnTwo} cliques</button>
        <button onClick={this.functionThree}>Botão 3: {btnThree} cliques</button>
      </div>);
  }
}

export default App;
