import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      tribe: 'A',
      feedback: '',
      agreement: false,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
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
          <label>
            Senha:
            <input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Tribo:
            <select
              name='tribe'
              value={this.state.tribe}
              onChange={this.handleInput}
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </label>
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