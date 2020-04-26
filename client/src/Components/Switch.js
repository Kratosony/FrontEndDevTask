import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.scss';

class Switch extends Component {
  render() {
    const { name, label } = this.props;
    return (
      <div id="inputContainer">
        <label for={name}>{label}:</label>
        <input id={name} name={name} type="checkbox" class="switch" />
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
};

export default Switch;