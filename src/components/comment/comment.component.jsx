import React from 'react';
import PropTypes from 'prop-types';

import './comment.styles.scss';

const Comment = ({ user, comment }) => (
  <div className='comment'>
    <p>{user}</p>
    <p>{comment}</p>
  </div>
);

Comment.propTypes = {
  user: PropTypes.string,
  comment: PropTypes.string
};

export default Comment;
