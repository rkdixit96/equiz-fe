import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

import Option from '../Option/Option';

class Question extends Component {
  constructor(props) {
    super(props);
    Question.propTypes = {
      question: PropTypes.string,
      id: PropTypes.string,
    };
    Question.defaultProps = {
      question: 'default',
      id: 'default',
    };
    this.state = {
      question: props.question,

      id: props.id,
      userName: props.userName,
    };
  }

  populateOptions = (options) => options.map(value => <Option text={value[Object.keys(value)[0]]} optionId={Object.keys(value)[0]} questionId={this.state.id}  userName={this.state.userName}/>);


  render() {
    return (
      <div className="Question">
        <div className="question-statement">
          {this.state.question}
        </div>
        <div>
          <form>
              {this.populateOptions(this.props.options)}
            </form>
        </div>
      </div>
    );
  }
}

export default Question;
