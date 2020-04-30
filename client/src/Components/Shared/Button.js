import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const constants = {
  backgroundColour: {
    main: 'main',
    secondary: 'secondary',
  }
}
class Button extends Component {
  getBackgroundColorClasses(colour) {
    if (colour === constants.backgroundColour.secondary) {
      return "secondary";
    }
    return "main";
  }

  render() {
    const {
      onClick,
      buttonDisplay,
      buttonColour,
      submit,
    } = this.props;

    const buttonColourSelection = this.getBackgroundColorClasses(buttonColour)
    const buttonType = submit ? "submit" : "button";

    return (
      <div>
        <button type={buttonType} id={buttonColourSelection} onClick={onClick} value={buttonDisplay}> {buttonDisplay} </button>
      </div>
    )
  }
}

Button.defaultProps = {
  onClick: () => { },
  submit: false,
};


Button.propTypes = {
  buttonColour: PropTypes.oneOf([
    constants.backgroundColour.main,
    constants.backgroundColour.secondary,
  ]),
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  buttonDisplay: PropTypes.string.isRequired,
};

export default Button;