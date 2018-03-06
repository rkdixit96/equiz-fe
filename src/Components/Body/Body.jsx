import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Body.css';

import WelcomeBox from '../WelcomeBox/WelcomeBox';
import LoginForm from '../LoginForm/LoginForm';

import QuestionContainer from '../QuestionContainer/QuestionContainer';

class Body extends Component {
  constructor(props) {
    super(props);
    Body.propTypes = {
      text: PropTypes.string,
    };
    Body.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
      userName: '',
      questions: '',
      userAnswers: '',
      userId: '',
      page: 'login',
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(userName) {
    fetch('/login', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        userName,
      }),
    }).then((resp) => {
      resp.json().then((value) => {
        this.setState({
          userName,
          questions: value.questions,
          userAnswers: value.res[0].answers,
          userId: value.res[0].id,
          page: 'questions',
        });
      });
    });
  }

  calculateScore() {
    const userId = this.state.userId;
    fetch('/calculateScore', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        userId,
      }),
    }).then((resp) => {
      resp.json().then(() => {
        this.setState({
          page: 'scoreBoard',
        });
      });
    });
  }


  render() {
    if (this.state.page === 'login') {
      return (
        <div className="Body">
          <div className="center-card">
            <WelcomeBox text="Quizzy!" />
            <LoginForm onLogin={this.onLogin} />
          </div>
        </div>
      );
    }
    if (this.state.page === 'questions') {
      return (
        <div>
          {this.state.userName}
          <QuestionContainer questions={this.state.questions} userAnswers={this.state.userAnswers} userId={this.state.userId} />
          <input type="button" value="Calculate Score" onClick={this.calculateScore.bind(this)} />
        </div>
      );
    }
    if (this.state.page === 'scoreBoard') {
      return (
        <div>
          Scoreboard
        </div>
      );
    }
  }
}

export default Body;
