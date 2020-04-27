import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as ReactLink } from "react-router-dom";
import './Link.scss';


class Link extends Component {
  render() {
    const { linkTo, name } = this.props;
    return (
      <div class="linkItem">
        <ReactLink class="linkText" to={linkTo}>
          {name}
        </ReactLink>
      </div>
    );
  }
}

Link.propTypes = {
  linkTo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Link;
