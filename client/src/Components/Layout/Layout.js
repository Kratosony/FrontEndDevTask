import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { push } from 'connected-react-router';
import Link from "Components/Shared/Link";
import Footer from "Components/Shared/Footer";
import { Link as ReactLink } from "react-router-dom";
import Weather from 'Components/Layout/Weather';
import { getUserGeolocation, logoutUser } from 'Store/User/UserActions';
import { commonStrings } from 'Constants/CommonStrings';
import { loginStrings } from 'Constants/LoginStrings';
import { routes } from 'Constants/Routes';
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
    const { weather, dispatch } = this.props;
    if (prevProps.weather !== weather) {
      this.onWeatherLoaded();
    }
    if (prevProps.loggedIn === true) {
      dispatch(push(routes.home));
    }
  }

  onWeatherLoaded() {
    this.setState({
      weatherAvailable: true,
    });
  }

  logOut = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }
  render() {
    const { weatherAvailable } = this.state;
    const { username, loggedIn } = this.props;
    return (
      <div class="root">
        <div class="topNav">
          <ReactLink class="linkText" to={"/"}>
            <div class="title">{commonStrings.betdilla}</div>
          </ReactLink>
          {loggedIn &&
            <Link class="login" linkTo={"/login"} name={commonStrings.logOut} onClick={this.logOut} />
          }
          {!loggedIn &&
            <Link class="login" linkTo={"/login"} name={"Login"} />
          }
        </div>
        <div>
          <div class="weatherBar">
            {weatherAvailable &&
              <Weather />
            }
            {loggedIn &&
              <p>{loginStrings.welcomeUsername(username)}</p>
            }
          </div>
          {this.props.children}
        </div>
        <Footer />
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    geolocationDetails: state.user.geolocationDetails,
    weather: state.user.weather,
    username: state.user.username,
    loggedIn: state.user.loggedIn,
  };
};

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default (connect(mapStateToProps))(Layout)
