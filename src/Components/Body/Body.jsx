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

        </div>
      );
    }
  }
}

export default Body;
