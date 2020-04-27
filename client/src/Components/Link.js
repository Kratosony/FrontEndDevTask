import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as ReactLink } from "react-router-dom";
import './Link.scss';


class Link extends Component {
  render() {
    const { linkTo, name, banner } = this.props;
    return (
      <div class={banner ? 'bannerItem' : 'linkItem'}>
        <ReactLink class="linkText" to={linkTo} >
          {name}
        </ReactLink >
      </div >
    );
  }
}

Link.defaultProps = {
  banner: false,
};

Link.propTypes = {
  linkTo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  banner: PropTypes.bool,
};

export default Link;
