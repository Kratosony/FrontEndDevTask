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
      filtered: [],
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
      this.setState({
        filtered: games.games
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.games.games
    });
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

  handleChange = (e) => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.games.games;
      newList = currentList.filter(item => {
        const lc = item.Name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.games.games;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    const { games } = this.props;
    const { gamesAvailable, filtered } = this.state;
    return (
      <div class="gameBrowserContainer">
        <div class="searchArea">
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search By Name" />
        </div>
        <div class="gameArea">
          {gamesAvailable &&
            filtered.map((item) => {
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
