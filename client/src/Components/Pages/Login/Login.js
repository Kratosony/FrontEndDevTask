import React, { Component } from 'react';
import LoginForm from 'Components/Pages/Login/LoginForm';
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
