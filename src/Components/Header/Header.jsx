import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      title: PropTypes.string,
      userName: PropTypes.string,

    };
    Header.defaultProps = {
      title: '',
      userName: '',
    };
    this.state = {
      title: props.title,
      userName: props.userName,

    };
  }
  render() {
    return (
      <div className="Header">
        <div className="header-title">
          {this.state.title}
        </div>
      </div>
    );
  }
}

export default Header;
