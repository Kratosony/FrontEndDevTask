import React, { Component } from 'react';
import PropTypes from "prop-types";
import './HomeSubSection.scss';

class HomeSubSection extends Component {
  render() {
    const { header, paragraph } = this.props;
    return (
      <div class="subSection">
        <h2 class="sectionHeader">
          {header}
        </h2>
        <p class="sectionParagraph">
          {paragraph}
        </p>
      </div>
    )
  }
}

HomeSubSection.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default HomeSubSection
