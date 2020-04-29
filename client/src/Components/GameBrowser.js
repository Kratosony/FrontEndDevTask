import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Game from "Components/Game";
import Loading from "Components/Loading";
import { getGames } from 'Store/Game/GameActions';
import './GameBrowser.scss';

class GameBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesAvailable: false,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getGames());
  }

  componentDidUpdate(prevProps) {
    const { games } = this.props;
    if (prevProps.games.loading !== games.loading && games.games.length !== 0) {
      this.onGamesLoaded();
    }
  }

  onGamesLoaded() {
    this.setState({
      gamesAvailable: true,
    });
  }

  onGamesLoading() {
    this.setState({
      gamesAvailable: false,
    })
  }

  render() {
    const { games } = this.props;
    const { gamesAvailable } = this.state;
    return (
      <div class="gameBrowserContainer">
        <div class="searchArea">
        //search
        </div>
        <div class="gameArea">
          {gamesAvailable &&
            games.games.map((item) => {
              return (
                <Game name={item.Name} description={item.Description} enabled={item.Enabled} />
              )
            })
          }
          {!gamesAvailable &&
            <Loading />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

GameBrowser.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default (connect(mapStateToProps))(GameBrowser)
