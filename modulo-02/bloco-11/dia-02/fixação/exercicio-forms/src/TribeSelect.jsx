import React, { Component } from 'react';

class TribeSelect extends Component {
  handleChange = (ev) => {
    const { value, handleInput, handleError } = this.props;

    if (!['A', 'B', 'C'].includes(value)) {
      handleError('tribe', 'Tribo inválida');
    } else {
      handleError('tribe');
    }
    handleInput(ev);
  }

  render() {
    const { value } = this.props;
    return (
      <label>
        Tribo:
        <select
          name='tribe'
          value={value}
          onChange={this.handleChange}
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
      </label>
    );
  }
}
 
export default TribeSelect;
