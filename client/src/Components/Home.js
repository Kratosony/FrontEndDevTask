import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button, { constants } from 'Components/Button';
import TextField from 'Components/TextField';
import Switch from 'Components/Switch';
import { commonStrings } from 'Constants/CommonStrings';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div id="headerContainer">
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

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
};


export default Home

