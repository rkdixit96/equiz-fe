import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Option.css';

class Option extends Component {
  constructor(props) {
    super(props);
    Option.propTypes = {
      text: PropTypes.string,
      optionId: PropTypes.string,

    };
    Option.defaultProps = {
      text: 'default',
      optionId: 'default',
    };
    this.state = {
      text: props.text,
      optionId: props.optionId,
      questionId: props.questionId,
      userId: props.userId,
      checked: props.checked,
    };
  }

  handleOptionChange() {
    const data = {
      userId: this.state.userId,
      questionId: this.state.questionId,
      answer: this.state.text,
    };
    console.log(data);
    fetch('/selectOption', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      this.setState({
        checked: true,
      });
    });
  }


  render() {
    return (

      <label>
        <input
          type="radio"
          value={this.state.optionId}
          name="question"
          checked={this.state.checked}
          onChange={this.handleOptionChange.bind(this)}
        />
        {this.props.text}
      </label>


    );
  }
}

export default Option;
