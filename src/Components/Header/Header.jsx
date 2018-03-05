import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      text: PropTypes.string,
    };
    Header.defaultProps = {
      text: 'default',
    };
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <div className="Header">
        <div className="header-text">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default Header;
