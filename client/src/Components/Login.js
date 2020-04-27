import React, { Component } from 'react';
import LoginImage from 'Assets/login.svg';
import Form from 'Components/Form';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div class="loginPage">
        <div class="formLeftContainer">
          <div class="formImageText">
            Login to your Betdilla Account Now!
          </div>
          <div class="formImageContainer">
            <img class="formImage" src={LoginImage} alt="Login Image" />
          </div>
        </div>
        <div class="formContainer">
          <Form />
        </div>
      </div>
    )
  }
}

export default Login
