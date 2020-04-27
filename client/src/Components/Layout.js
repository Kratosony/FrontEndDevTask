import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Link from "Components/Link";
import { Link as ReactLink } from "react-router-dom";
import Weather from 'Components/Weather';
import { getUserGeolocation } from 'Store/User/UserActions';
import { commonStrings } from 'Constants/CommonStrings';
import './Layout.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherAvailable: false,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const publicIp = require('public-ip');
    (async () => {
      dispatch(getUserGeolocation(await publicIp.v4()));
    })();
  }

  componentDidUpdate(prevProps) {
    const { weather } = this.props;
    if (prevProps.weather !== weather) {
      this.onWeatherLoaded();
    }
  }

  onWeatherLoaded() {
    this.setState({
      weatherAvailable: true,
    });
  }
  render() {
    const { weatherAvailable } = this.state;
    return (
      <div class="root">
        <div class="topNav">
          <ReactLink class="linkText" to={"/"}>
            <h1 class="title">{commonStrings.betdilla}</h1>
          </ReactLink>
          <Link class="login" linkTo={"/login"} name={"Login"}></Link>
        </div>
        <div>
          <div class="weatherContainer">
            {weatherAvailable &&
              <Weather />
            }
          </div>
          {this.props.children}
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    geolocationDetails: state.user.geolocationDetails,
    weather: state.user.weather,
  };
};

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default (connect(mapStateToProps))(Layout)
