import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Star } from '../../assets/star-rate.svg';

import './star-rating.styles.scss';

const StarRating = ({stars , size}) => {
  stars = Math.round(stars);
  return(
    <div>
      {[ ...Array(stars)].map((star, index) => {
        return <Star key={index} className={`star ${size}`}/>;
      })}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
  size: PropTypes.string
};

export default StarRating;
