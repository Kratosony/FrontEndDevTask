import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.scss';

class Switch extends Component {
  render() {
    const { name, label, onClick } = this.props;
    return (
      <div class="inputContainer">
        <label for={name}>{label}:</label>
        <input id={name} name={name} type="checkbox" class="switch" onChange={onClick} />
      </div>
    )
  }
}

Switch.defaultProps = {
  label: "",
  name: "",
  onClick: () => { },
};


Switch.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Switch;