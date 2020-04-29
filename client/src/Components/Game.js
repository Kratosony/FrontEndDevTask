import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

class Game extends Component {
  render() {
    const {
      name,
      description,
    } = this.props;

    return (
      <div class="gameOverlay">
        <div class="gameDetails">
          <div class="gameName">
            <h2>{name}</h2>
          </div>
          <div class="gameDescription">
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default Game;