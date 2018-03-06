import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ScoreCard.css';

class ScoreCard extends Component {
  constructor(props) {
    super(props);
    ScoreCard.propTypes = {
      userName: PropTypes.string,
      score: PropTypes.string,
    };
    ScoreCard.defaultProps = {
      userName: 'default',
      score: '0',
    };
    this.state = {
      userName: props.userName,
      score: props.score,
    };
  }
  render() {
    return (
      <div className="ScoreCard">
        <div className="ScoreCard-text">
          {this.state.userName}
        </div>
        <div>
          {this.state.score}
        </div>
      </div>
    );
  }
}

export default ScoreCard;
