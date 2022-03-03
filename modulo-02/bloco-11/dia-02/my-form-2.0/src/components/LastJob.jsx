import React, { Component } from 'react';
import './LastJob.css';

class LastJob extends Component {
  constructor() {
    super();

    this.state = {jobAlert: false};
  }

  handleJob = () => {
    if (!this.state.jobAlert) {
      alert('Preencha com cuidado esta informação.');
      this.setState({jobAlert: true});
    }
  }

  render() {
    const { handleChange } = this.props;
    const { resume, job, jobDescription } = this.props.state;

    return (
      <fieldset>
        <legend>Último Emprego</legend>
        <label>
          Resumo do currículo:{' '}
          <textarea
            name="resume"
            value={resume}
            onChange={handleChange}
            maxLength="1000"
            required
          />
        </label>
        <label>
          Cargo:{' '}
          <textarea
            name="job"
            value={job}
            onChange={handleChange}
            onMouseEnter={this.handleJob}
            maxLength="40"
            required
          />
        </label>
        <label>
          Descrição do cargo:{' '}
          <textarea
            name="jobDescription"
            value={jobDescription}
            onChange={handleChange}
            maxLength="500"
            required
          />
        </label>
      </fieldset>
    );
  }
}

export default LastJob;