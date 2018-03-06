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

  populateScoreCards = scoreCards =>{
    let count = 0;
    return scoreCards.map(value =>{
      count+=1;
      return(
        <ScoreCard userName={value.userName} score={value.score} count={count} />
      );
    });
  } 

  render() {
    return (
      <div className="LeaderBoard">
        <div className="LeaderBoard-text">
          <div>
            LeaderBoard
            </div>

          {this.populateScoreCards(this.props.topScores)}
        </div>
      </div>
    );
  }
}

export default LeaderBoard;