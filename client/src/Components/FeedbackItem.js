import React, { Component } from 'react';
import PropTypes from "prop-types";
import './FeedbackItem.scss';

class FeedbackItem extends Component {
  render() {
    const { header, paragraph, avatar } = this.props;
    console.log(avatar);
    return (
      <div class="feedbackItem">
        <h2 class="feedbackHeader">
          {header}
        </h2>
        <p class="feedbackParagraph">
          {paragraph}
        </p>
        <div class="avatarContainer">
          <img src={avatar} alt="avatar" class="avatar" />
        </div>
      </div>
    )
  }
}

FeedbackItem.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FeedbackItem
