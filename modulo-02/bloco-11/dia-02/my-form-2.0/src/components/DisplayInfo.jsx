import React, { Component } from 'react';
import './DisplayInfo.css';

class DisplayInfo extends Component {
  render() {
    console.log(this.props);
    const {
      name, email, cpf, address,
      city, state, resume, job,
      jobDescription
    } = this.props.state;

    return (
      <div>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {address}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state}</p>
        <p>Resumo do currículo: {resume}</p>
        <p>Cargo: {job}</p>
        <p>Descrição do cargo: {jobDescription}</p>
      </div>
    );
  }
}

export default DisplayInfo;