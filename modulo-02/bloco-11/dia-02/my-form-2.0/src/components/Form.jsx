import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo';
import LastJob from './LastJob';
import PersonalData from './PersonalData';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      resume: '',
      job: '',
      jobDescription: '',
      previousSubmits: [],
    };
  }

  handleChange = ({ target }, upper, noSpec) => {
    let {name, type, value, maxLength} = target;
    if (upper) value = value.toUpperCase();
    if (maxLength) value = value.slice(0,maxLength);
    // Fonte: https://stackoverflow.com/a/30225759
    // Se não por os acentos, não é possível digitar palavras com eles
    if (noSpec) value = value.split(/[^A-Za-z0-9À-ž~`´^ ]+/).join('');

    if (type === 'checkbox') value = target.checked;
    this.setState({[name]: value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState((prev) => {
      const next = { ...prev };
      delete next.previousSubmits;
      return {
        previousSubmits: [...prev.previousSubmits, next]
      }
    })
  }

  handleReset = (ev) => {
    ev.preventDefault();
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      resume: '',
      job: '',
      jobDescription: '',
      previousSubmits: [],
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <PersonalData state={this.state} handleChange={this.handleChange}/>
        <LastJob state={this.state} handleChange={this.handleChange}/>
        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>
        {this.state.previousSubmits.map((submit, index) =>
          (<DisplayInfo key={index} state={submit} />))}
      </form>
    );
  }
}

export default Form;
