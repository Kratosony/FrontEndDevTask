import React, { Component } from 'react';
import Button, { constants } from 'Components/Button';
import TextField from 'Components/TextField';
import Switch from 'Components/Switch';
import { commonStrings } from 'Constants/CommonStrings';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div id="headerContainer">
                <h1 id="header"> Welcome to MadOwlNews.com</h1>
                <Button buttonDisplay="Main" buttonColour={constants.backgroundColour.main} />
                <Button buttonDisplay="Secondary" buttonColour={constants.backgroundColour.secondary} />
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

export default Home;