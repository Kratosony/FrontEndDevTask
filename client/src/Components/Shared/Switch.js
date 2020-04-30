import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.scss';

class Switch extends Component {
  render() {
    const { name, label, handleBlur, handleChange } = this.props;
    return (
      <div class="inputContainer">
        <label for={name}>{label}:</label>
        <input id={name} name={name} type="checkbox" class="switch" onChange={handleChange} onBlur={handleBlur} />
      </div>
    )
  }
}

Switch.defaultProps = {
  label: "",
};


Switch.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default Switch;