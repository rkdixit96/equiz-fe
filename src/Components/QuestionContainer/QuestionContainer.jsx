import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionContainer.css';

import Question from '../Question/Question';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    QuestionContainer.propTypes = {
      userId: PropTypes.integer,
    };
    QuestionContainer.defaultProps = {
      userId: 'default',
    };
    this.state = {
      userId: props.userId,
    };
  }

  populateQuestions = questions => questions.map(value => <Question question={value.questionText} options={value.options} id={value.id} userId={this.state.userId}  />);

  render() {
    return (
      <div className="QuestionContainer">
        <div className="QuestionContainer-text">
          {this.populateQuestions(this.props.questions)}
        </div>
      </div>
    );
  }
}

export default QuestionContainer;
