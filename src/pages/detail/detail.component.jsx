import React from 'react';
import PropTypes from 'prop-types';
import { StarRating, Comment } from '../../components';

import CommentIcon from '../../assets/comment.png';

import './detail.styles.scss';

const Detail = ({ name, rate, img, comments, price, basics, description }) => (
  <div>
    <div className='wrapper'>
      <div className='row'>
        <div className='column right'>
          <img src={img} alt="product image" />
        </div>
        <div className='column'>
          <h1 className='bold'>{name}</h1>
          <div className='row'>
            <StarRating stars={rate} size='medium' />
            <span className='comment-detail'>
              {comments.length}
              <img src={CommentIcon} alt="comment icon" className='comment-icon' />
            </span>
          </div>
          <div className='row'>
            <h2>${price}</h2>
            {basics ? <div className='basics'> Basic </div> : null}
          </div>
          <p>{description}</p>
          <button>Add Cart</button>
        </div>
      </div>
    </div>
    <div className='divider' />
    <h3> Coments: </h3>
    <div className='comments'>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  </div>
);

Detail.propTypes = {
  name: PropTypes.string,
  rate: PropTypes.number,
  img: PropTypes.string,
  comments: PropTypes.array,
  price: PropTypes.number,
  basics: PropTypes.bool,
  description: PropTypes.string
};

export default Detail;