import React from 'react';
import PropTypes from 'prop-types';

import TrashIcon from '../../assets/recycle-bin.png';

import './cart-product.styles.scss';

const CartProduct = ({ img, name, price }) => (  
  <div className='product'>
    <img src={img} alt="product"/>
    <p>{ name }</p>
    <p>${ price }</p>
    <button>
      <img src={TrashIcon} alt="delete icon" className='trash-icon'/>
    </button>
  </div>
);

CartProduct.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

export default CartProduct;
