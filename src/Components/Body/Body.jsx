import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Body.css';

import WelcomeBox from '../WelcomeBox/WelcomeBox';
import LoginForm from '../LoginForm/LoginForm';

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

        </div>
      );
    }
  }
}

export default Body;
