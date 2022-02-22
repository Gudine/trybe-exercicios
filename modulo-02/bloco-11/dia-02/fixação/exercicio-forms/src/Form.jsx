import React, { Component } from 'react';
import Password from './Password';
import TribeSelect from './TribeSelect';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      tribe: 'A',
      feedback: '',
      agreement: false,
      formularioComErros: false,
      error_password: false,
      error_tribe: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }

  handleError(name, error) {
    console.log(error);
    this.setState(({error_password, error_tribe}) => {
      const result = {
        error_password, error_tribe,
        [`error_${name}`]: !!error,
      }
      result.formularioComErros = !!(result.error_password || result.error_tribe)
      return result
    });
  }

  render() { 
    return (
      <form>
        <h1>Forms de feedback</h1>
        <fieldset>
          <legend>Identificação</legend>
          <label>
            Nome de usuário:
            <input
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleInput}
            />
          </label>
          <Password
            value={this.state.password}
            handleInput={this.handleInput}
            handleError={this.handleError}
          />
          <TribeSelect
            value={this.state.tribe}
            handleInput={this.handleInput}
            handleError={this.handleError}
          />
        </fieldset>
        <fieldset>
          <legend>Informações a enviar</legend>
          <label>
            Feedback:
            <textarea
              name='feedback'
              value={this.state.feedback}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Arquivo:
            <input name='file' type="file" />
          </label>
        </fieldset>
        <label>
          Eu aceito que meu feedback será lido pela equipe
          <input
            name='agreement'
            type='checkbox'
            checked={this.state.agreement}
            onChange={this.handleInput}
          />
        </label>
      </form>
    );
  }
}

export default Form;
