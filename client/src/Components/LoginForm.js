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
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">{loginStrings.username}</label>
              <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
              <ErrorMessage name="username" component="div" class="errorMessage" />
            </div>
            <div className="form-group">
              <label htmlFor="email">{loginStrings.email}</label>
              <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" class="errorMessage" />
            </div>
            <div className="form-group">
              <label htmlFor="password">{loginStrings.password}</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" class="errorMessage" />
            </div>
            <div class="buttonPair">
              <Button submit buttonDisplay={commonStrings.submit} buttonColour={constants.backgroundColour.main} />
              <Button buttonDisplay={commonStrings.cancel} buttonColour={constants.backgroundColour.secondary} />
            </div>
          </Form>
        )}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    geolocationDetails: state.user.geolocationDetails,
    weather: state.user.weather,
  };
};

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default (connect(mapStateToProps))(LoginForm)
