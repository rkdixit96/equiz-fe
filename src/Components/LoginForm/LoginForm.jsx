import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    LoginForm.propTypes = {
      text: PropTypes.string,
    };
    LoginForm.defaultProps = {
      text: 'default',
    };
    this.state = {
      userName: 'null',
    };
  }
  render() {
    return (
      <div className="LoginForm">
          Login
        <div className="centering">
          Username
          <input type="text" onChange={(event) => { this.setState({ userName: event.target.value }); }} />
          <input type="button" value="Login" onClick={() => { this.props.onLogin(this.state.userName); }} />
        </div>
      </div>
    );
  }
}

export default LoginForm;
