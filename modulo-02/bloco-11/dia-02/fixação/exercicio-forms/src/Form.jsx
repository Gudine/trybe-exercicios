import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
    };

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
  }

  handleUsernameInput(ev) {
    this.setState({
      username: ev.target.value,
    });
  }

  render() { 
    return (
      <form>
        <h1>Forms de feedback</h1>
        <label>
          Nome de usuário:
          <input name='username' type='text' onChange={this.handleUsernameInput}/>
        </label>
        <label>
          Senha:
          <input name='password' type='password' />
        </label>
        <label>
          Tribo:
          <select name='tribe'>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </label>
        <label>
          Feedback:
          <textarea name='feedback' />
        </label>
      </form>
    );
  }
}

export default Form;