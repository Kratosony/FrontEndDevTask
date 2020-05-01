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
      <div class="game">
        <div class="face face1">
          <div class="content">
            <h2>{name}</h2>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
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
};

export default Game;