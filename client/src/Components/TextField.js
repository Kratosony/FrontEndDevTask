import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.scss';

class TextField extends Component {
  render() {
    const { inputType, name, placeholder } = this.props;
    return (
      <div id="inputContainer">
        <label>{placeholder}:</label>
        <input type={inputType} id={name} name={name} placeholder={placeholder} required />
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
};

export default TextField;