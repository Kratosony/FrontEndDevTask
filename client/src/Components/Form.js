import React from 'react';
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import Button, { constants } from 'Components/Button';
import TextField from 'Components/TextField';
import Switch from 'Components/Switch';
import { commonStrings } from 'Constants/CommonStrings';
import './Form.scss';

const Form = () => (
  <Formik
    initialValues={{ username: "", email: "", password: "", oldCheck: false }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string()
        .required("Username is Required"),
      email: Yup.string()
        .email()
        .required("Email is Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      oldCheck: Yup.bool()
        .oneOf([true], 'You have to be 18 Years old to enter this Website')
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <TextField
            value={values.username}
            placeholder={commonStrings.username}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.username}
          />
          {errors.username && touched.username && (
            <div class="errorMessage">{errors.username}</div>
          )}
          <TextField
            inputType="email"
            value={values.email}
            placeholder={commonStrings.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div class="errorMessage">{errors.email}</div>
          )}
          <TextField
            inputType="password"
            value={values.password}
            placeholder={commonStrings.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div class="errorMessage">{errors.password}</div>
          )}
          <Switch label={commonStrings.oldCheck} name="oldCheck" onChange={handleChange} onBlur={handleBlur} />
          {errors.oldCheck && touched.oldCheck && (
            <div class="errorMessage">{errors.oldCheck}</div>
          )}
          <div class="buttonPair">
            <Button submit buttonDisplay={commonStrings.submit} buttonColour={constants.backgroundColour.main} disabled={isSubmitting} />
            <Button buttonDisplay={commonStrings.cancel} buttonColour={constants.backgroundColour.secondary} />
          </div>
        </form>
      );
    }}
  </Formik>
);

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default Form

