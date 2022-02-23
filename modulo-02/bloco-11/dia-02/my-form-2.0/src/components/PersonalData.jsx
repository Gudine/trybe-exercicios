import React, { Component } from 'react';
import './PersonalData.css';

class PersonalData extends Component {
  handleCity = (ev) => {
    if (ev.target.value.match(/^\d/)) {
      ev.target.value = '';
      this.props.handleChange(ev);
    };
  }

  render() {
    const populateStates = () => {
      const stateList = [['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'], ['CE', 'Ceara'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'], ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'], ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'], ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'], ['SE', 'Sergipe'], ['TO', 'Tocantins']];

      return stateList.map((st) => <option key={st[0]} value={st[0]}>{st[1]}</option>)
    }
    
    const { handleChange } = this.props;
    const { name, email, cpf, address, city, state } = this.props.state;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>
          Nome:{' '}
          <input
            name="name"
            type="text"
            value={name}
            onChange={(ev) => handleChange(ev, true)}
            maxLength="40"
            required
          />
        </label>
        <label>
          Email:{' '}
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            maxLength="50"
            pattern="^[A-Za-z0-9.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]{3}$"
            required
          />
        </label>
        <label>
          CPF:{' '}
          <input
            name="cpf"
            type="text"
            value={cpf}
            onChange={handleChange}
            maxLength="11"
            required
          />
        </label>
        <label>
          Endereço:{' '}
          <input
            name="address"
            type="text"
            value={address}
            onChange={(ev) => handleChange(ev, false, true)}
            maxLength="200"
            pattern="[A-Za-z0-9À-ž ]+"
            required
          />
        </label>
        <label>
          Cidade:{' '}
          <input
            name="city"
            type="text"
            value={city}
            onChange={handleChange}
            onBlur={this.handleCity}
            maxLength="28"
            required
          />
        </label>
        <label>
          Estado:{' '}
          <select
            name="state"
            value={state}
            onChange={handleChange}
            required 
          >
            <option disabled></option>
            {populateStates()}
          </select>
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;