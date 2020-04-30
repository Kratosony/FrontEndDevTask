import React, { Component } from 'react';
import LoginImage from 'Assets/login.svg';
import LoginForm from 'Components/LoginForm';
import { loginStrings } from 'Constants/LoginStrings';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div class="loginPage">
        <div class="formContainer">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login
