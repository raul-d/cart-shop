import React from 'react';
import PropTypes from 'prop-types';

import './item.styles.scss';

const Item = ({ name, price, basics, img }) => (
  <div className='item'>
    {
      basics ? <div className='basic'>BASIC</div> : null
    }
    <img src={img} alt="product image"/>
    <div className='bold'>
      <p>{ name }</p>
      <p>$ { price }</p>
    </div>
    <div className='footer'>
      <button className='button detail'> See detail </button>
      <button className='button add'> Add to cart </button>
    </div>
  </div>
);

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  basics: PropTypes.bool,
  img: PropTypes.string
};

export default Item;
