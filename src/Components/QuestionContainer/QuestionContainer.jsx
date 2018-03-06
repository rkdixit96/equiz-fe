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
      userAnswers: props.userAnswers,
    };

    this.getUserAnserBasedOnId = this.getUserAnserBasedOnId.bind(this)
  }

  getUserAnserBasedOnId(id){
    for(let userInd=0;userInd<this.state.userAnswers.length;userInd+=1){
        const currId = this.state.userAnswers[userInd].questionId;
        const currAns =this.state.userAnswers[userInd].answer;
        if(currId===id){
            return currAns;
        }

    }
    return "No answer";
    //   this.state.userAnswers.forEach(userAns=>{
    //       if(userAns.questionId===id){
    //           return userAns.answer;
    //       }
    //   })
    //   return "No answer";
  }

  populateQuestions = questions => questions.map(value => <Question question={value.questionText} options={value.options} id={value.id} userId={this.state.userId} userAnswer={this.getUserAnserBasedOnId(value.id)}  />);

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
