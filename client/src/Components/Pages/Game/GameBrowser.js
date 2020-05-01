import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button, { constants } from 'Components/Shared/Button';
import Game from "Components/Pages/Game/Game";
import Loading from "Components/Shared/Loading";
import { getGames } from 'Store/Game/GameActions';
import { compare, compareDescending } from 'Constants/HelperFunctions';
import './GameBrowser.scss';
import { commonStrings } from 'Constants/CommonStrings';

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
    if (e.target.value === commonStrings.ascending) {
      newList = this.state.filtered.sort(compare);
    }
    else {
      newList = this.state.filtered.sort(compareDescending);
    }
    this.setState({
      filtered: newList,
    });
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
    this.setState({
      filtered: newList
    });
  }
  handleDropDownChange = (e) => {
    const newList = this.state.filtered.filter(game => game.Vendor === e.target.value);
    if (e.target.value === "none") {
      this.setState({
        filtered: this.props.games.games,
        vendorFilter: e.target.value,
      })
    }
    else {
      this.setState({
        vendorFilter: e.target.value,
        filtered: newList
      });
    }
  }

  clearFilter = () => {
    this.setState({
      filtered: this.props.games.games,
      vendorFilter: '',
    })
  }
  render() {
    const { gamesAvailable, filtered } = this.state;
    const vendorsList = Array.from(new Set(filtered.map(x => x.Vendor)));
    return (
      <div class="gameBrowserContainer">
        <div class="filtersArea">
          <div class="search">
            <label>{commonStrings.search}</label>
            <input type="text" class="input" onChange={this.handleChange} placeholder={commonStrings.search} />
          </div>
          <Button buttonDisplay={commonStrings.clearFilters} buttonColour={constants.backgroundColour.main} onClick={this.clearFilter} />
          <div class="filter">
            <label htmlFor="vendors">{commonStrings.filterVendor}</label>
            <select id="vendors" autoComplete="off" onChange={this.handleDropDownChange}>
              <option value="none">No Filter</option>
              {
                vendorsList.map(vendor => (
                  <option key={vendor}>{vendor}</option>
                ))
              }
            </select>
          </div>
          <div class="sortButtons">
            <Button buttonDisplay={commonStrings.ascending} buttonColour={constants.backgroundColour.secondary} onClick={this.onSortClick} />
            <Button buttonDisplay={commonStrings.descending} buttonColour={constants.backgroundColour.secondary} onClick={this.onSortClick} />
          </div>
        </div>
        <h1>
          {commonStrings.games}
        </h1>
        <div class="gameArea">
          {gamesAvailable && filtered.length > 0 &&
            filtered.map((item) => {
              return (
                <Game key={item.GameId} name={item.Name} description={item.Description} enabled={item.Enabled} vendor={item.Vendor} />
              )
            })
          }
          {gamesAvailable && filtered.length === 0 &&
            <h1 class="noResults">{commonStrings.noResults}</h1>
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
