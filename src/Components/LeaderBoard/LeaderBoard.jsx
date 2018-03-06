import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LeaderBoard.css';

import ScoreCard from '../ScoreCard/ScoreCard';

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    LeaderBoard.propTypes = {
      userId: PropTypes.integer,
    };
    LeaderBoard.defaultProps = {
      userId: 'default',
    };
    this.state = {
      userId: props.userId,
    };
  }

  populateScoreCards = scoreCards => scoreCards.map(value => <ScoreCard userName={value.userName} score={value.score}  />);

  render() {
    return (
      <div className="LeaderBoard">
        <div className="LeaderBoard-text">
          {this.populateScoreCards(this.props.topScores)}
        </div>
      </div>
    );
  }
}

export default LeaderBoard;