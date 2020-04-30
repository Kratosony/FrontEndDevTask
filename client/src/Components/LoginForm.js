import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { push } from 'connected-react-router';
import Button, { constants } from 'Components/Button';
import { commonStrings } from 'Constants/CommonStrings';
import { loginStrings } from 'Constants/LoginStrings';
import { validationSchema } from 'Constants/FormValidationSchema';
import { routes } from 'Constants/Routes';
import { loginUser } from 'Store/User/UserActions';
import './LoginForm.scss';
class LoginForm extends Component {
  loginRequest(username, email, password) {
    const { dispatch } = this.props;
    dispatch(loginUser(username, email, password));
    dispatch(push(routes.gameBrowser));
  }
  render() {
    return (
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={fields => {
          this.loginRequest(fields.username, fields.email, fields.password);
        }}
        render={({ errors, touched }) => (
          <Form>
            <h1>{commonStrings.login}</h1>
            <div class="formGroup">
              <label htmlFor="username">{loginStrings.username}</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" class="errorMessage" />
            </div>
            <div class="formGroup">
              <label htmlFor="email">{loginStrings.email}</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="div" class="errorMessage" />
            </div>
            <div class="formGroup">
              <label htmlFor="password">{loginStrings.password}</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" class="errorMessage" />
            </div>
            <div class="formButton">
              <Button submit buttonDisplay={commonStrings.submit} buttonColour={constants.backgroundColour.secondary} />
            </div>
            <div class="formFooter">
              <h2>{commonStrings.betdilla}</h2>
            </div>
          </Form>
        )}
      />
    )
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default (connect())(LoginForm)
