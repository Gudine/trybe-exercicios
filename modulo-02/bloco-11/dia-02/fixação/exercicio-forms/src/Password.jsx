import React, { Component } from 'react';

class Password extends Component {
  handleChange = (ev) => {
    const { value, handleInput, handleError } = this.props;
    let error = '';
    if (value.length < 8) {
      error += 'Senha deve ter pelo menos 8 caracteres\n';
    }
    if (
      !value.match(/[A-Z]/) ||
      !value.match(/[a-z]/) ||
      !value.match(/[0-9]/) ||
      !value.match(/[^A-Za-z0-9\s]/)
    ) {
      error += 'Senha deve conter letras maiúsculas, minúsculas, números e símbolos';
    }
    error ? handleError('password', error) : handleError('password');
    handleInput(ev)
  }
  render() { 
    const { value } = this.props;

    return (
      <label>
        Senha:
        <input
          name='password'
          type='password'
          value={value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Password;
