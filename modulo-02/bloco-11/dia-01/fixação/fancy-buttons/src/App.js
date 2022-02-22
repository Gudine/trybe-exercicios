import './App.css';
import React, { Component } from 'react';

/* const functionOne = (ev) => console.log('Funcionou!!!');
const functionTwo = (ev) => console.log('Funcionou de novo!!!');
const functionThree = (ev) => console.log('Funcionou mais uma vez!!!'); */

class App extends Component {
  constructor() {
    super()

    this.state = {
      btnOne: { count: 0, color: 'green' },
      btnTwo: { count: 0, color: 'green' },
      btnThree: { count: 0, color: 'green' },
    };

    this.changeBtn = this.changeBtn.bind(this);
/*     this.functionOne = this.functionOne.bind(this);
    this.functionTwo = this.functionTwo.bind(this);
    this.functionThree = this.functionThree.bind(this); */
  }

  changeBtn(btn) {
    this.setState((prev, _props) => {
      const count = prev[btn].count + 1;
      const result = {
        count: count,
        color: (count%2) ? null : 'green',
      };
      console.log(result.color);
      return { [btn]: result };
    });
  }

/*   functionOne() {
    this.setState((prev, _props) => ({ btnOne: prev.btnOne + 1 }))
  }
  functionTwo() {
    this.setState((prev, _props) => ({ btnTwo: prev.btnTwo + 1 }))
  }
  functionThree() {
    this.setState((prev, _props) => ({ btnThree: prev.btnThree + 1 }))
  } */

  render() {
    const { btnOne, btnTwo, btnThree } = this.state;

    return (
      <div className="App">
{/*         <button onClick={functionOne}>Botão 1</button>
        <button onClick={functionTwo}>Botão 2</button>
        <button onClick={functionThree}>Botão 3</button>
        <button onClick={this.functionOne}>Botão 1: {btnOne} cliques</button>
        <button onClick={this.functionTwo}>Botão 2: {btnTwo} cliques</button>
        <button onClick={this.functionThree}>Botão 3: {btnThree} cliques</button> */}
        <button
          onClick={() => this.changeBtn('btnOne')}
          style={{ backgroundColor: btnOne.color }}
          >
          Botão 1: {btnOne.count} cliques
        </button>
        <button
          onClick={() => this.changeBtn('btnTwo')}
          style={{ backgroundColor: btnTwo.color }}
          >
          Botão 2: {btnTwo.count} cliques
        </button>
        <button
          onClick={() => this.changeBtn('btnThree')}
          style={{ backgroundColor: btnThree.color }}
          >
          Botão 3: {btnThree.count} cliques
        </button>
      </div>);
  }
}

export default App;
