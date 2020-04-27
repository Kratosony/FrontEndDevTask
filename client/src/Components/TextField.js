import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.scss';

class TextField extends Component {
  render() {
    const { inputType, name, placeholder, handleChange, handleBlur } = this.props;
    return (
      <div class="inputContainer">
        <label>{placeholder}:</label>
        <input type={inputType} id={name} name={name} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} />
      </div>
    )
  }
}

TextField.defaultProps = {
  placeholder: "",
  inputType: "text",
};


TextField.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default TextField;