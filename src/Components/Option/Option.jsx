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
      userName: props.userName,
    };
  }


  render() {
    return (

      <label>
        <input
          type="radio"
          value={this.state.optionId}
          name="question"

        />
        {this.props.text}
      </label>


    );
  }
}

export default Option;
