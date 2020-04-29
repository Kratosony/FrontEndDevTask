import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';

class Game extends Component {
  render() {
    const {
      name,
      description,
      vendor,
      enabled,
    } = this.props;

    return (
      <div class="gameOverlay">
        <div class="gameContainer">
          {name}
          {enabled}
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