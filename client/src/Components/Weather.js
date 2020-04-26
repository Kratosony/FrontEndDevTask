import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { commonStrings } from "Constants/CommonStrings";
import { GET_WEATHER_ICON } from "Store/API/ApiEndpoints";
import './Weather.scss';

class Weather extends Component {

  render() {
    const {
      temperature,
      uv,
      weather,
    } = this.props;

    return (
      <div class="weatherContainer">
        <div class="topContainer">
          {weather.map((item) => {
            return (
              <div class="imageContainer">
                <img key={item.id} src={GET_WEATHER_ICON(item.icon)} alt={item.description} class="weatherIcon" />
              </div>
            )
          })}
          <p class="temperature">{commonStrings.temperature(temperature)}</p>
        </div>
        <div class="uv">{commonStrings.uv(uv)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    temperature: state.user.temperature,
    uv: state.user.uv,
    weather: state.user.weather,
  };
};


Weather.defaultProps = {
  icon: '',
  temperature: 0,
  uv: 0,
  weather: {},
};
Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  uv: PropTypes.number.isRequired,
  weather: PropTypes.shape({
    weather: PropTypes.arrayOf(PropTypes.shape({
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }))
  }),
};

export default (connect(mapStateToProps))(Weather)
