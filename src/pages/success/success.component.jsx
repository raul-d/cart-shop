import React from 'react';

import './success.styles.scss';
import image from '../../assets/success1.webp';

const Success = () => (
  <div className='success-page'>
    <img src={image} alt="success logo"/>
    <h1>Congratulations! Your order has shipped</h1>
  </div>
);

export default Success;
