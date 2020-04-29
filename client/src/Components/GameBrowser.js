import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Game from "Components/Game";
import Loading from "Components/Loading";
import { getGames } from 'Store/Game/GameActions';
import { compare, compareDescending } from 'Constants/HelperFunctions';
import './GameBrowser.scss';

class GameBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesAvailable: false,
      filtered: [],
      vendorFilter: '',
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

  onSortClick = (e) => {
    let newList = []
    if (e.target.value === "SortAscending") {
      newList = this.state.filtered.sort(compare);
      this.setState({
        filtered: newList
      });
    }
    else {
      newList = this.state.filtered.sort(compareDescending);
      this.setState({
        filtered: newList
      });
    }
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
  handleDropDownChange = (e) => {
    const newList = this.state.filtered.filter(game => game.Vendor === e.target.value);
    this.setState({
      vendorFilter: e.target.value,
      filtered: newList
    });
    if (e.target.value === "none") {
      this.setState({
        filtered: this.props.games.games
      })
    }
  }
  render() {
    const { gamesAvailable, filtered } = this.state;
    const vendorsList = Array.from(new Set(filtered.map(x => x.Vendor)));
    return (
      <div class="gameBrowserContainer">
        <div class="filtersArea">
          <div class="search">
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search By Name" />
          </div>
          <div class="filter">
            <label for="vendors">Filter By Vendor</label>
            <select id="vendors" autocomplete="off" onChange={this.handleDropDownChange}>
              <option value="none">No Filter</option>
              {
                vendorsList.map(vendor => (
                  <option>{vendor}</option>
                ))
              }
            </select>
          </div>
          <div class="sortButtons">
            <button class="sortButton" value="SortAscending" onClick={this.onSortClick}> Ascending </button>
            <button class="sortButton" value="SortDescending" onClick={this.onSortClick}> Descending </button>
          </div>
        </div>
        <div class="gameArea">
          {gamesAvailable &&
            filtered.map((item) => {
              return (
                <Game name={item.Name} description={item.Description} enabled={item.Enabled} vendor={item.Vendor} />
              )
            })
          }
          {!gamesAvailable &&
            <Loading />
          }
        </div>
      </div >
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
