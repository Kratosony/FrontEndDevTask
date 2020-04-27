import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button, { constants } from 'Components/Button';
import TextField from 'Components/TextField';
import Switch from 'Components/Switch';
import Weather from 'Components/Weather';
import { commonStrings } from 'Constants/CommonStrings';
import { getUserGeolocation, getWeatherDetails } from 'Store/User/UserActions';
import './Login.scss';

class Login extends Component {
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
      <div id="headerContainer">
        <h1 id="header"> Welcome to MadOwlNews.com</h1>
        <Button buttonDisplay="Main" buttonColour={constants.backgroundColour.main} />
        <Button buttonDisplay="Secondary" buttonColour={constants.backgroundColour.secondary} />
        {weatherAvailable &&
          <Weather />
        }
        <form>
          <TextField name="username" placeholder={commonStrings.username} />
          <TextField inputType="email" name="email" placeholder={commonStrings.email} />
          <TextField inputType="password" name="password" placeholder={commonStrings.password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
          <Switch label="By enabling this switch I confirm that I am 18 years of age or older" name="switch"></Switch>
          <Button submit buttonDisplay={commonStrings.submit} buttonColour={constants.backgroundColour.main} />
          <Button buttonDisplay={commonStrings.cancel} buttonColour={constants.backgroundColour.secondary} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    geolocationDetails: state.user.geolocationDetails,
    weather: state.user.weather,
  };
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default (connect(mapStateToProps))(Login)

