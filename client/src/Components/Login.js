import React, { Component } from 'react';
import LoginImage from 'Assets/login.svg';
import LoginForm from 'Components/LoginForm';
import { loginStrings } from 'Constants/LoginStrings';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div class="loginPage">
        <div class="formLeftContainer">
          <div class="formImageText">
            {loginStrings.loginInvite}
          </div>
          <div class="formImageContainer">
            <img class="formImage" src={LoginImage} alt="Login Image" />
          </div>
        </div>
        <div class="formContainer">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login
