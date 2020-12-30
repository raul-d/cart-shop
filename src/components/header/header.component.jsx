import React from 'react';

import { ReactComponent as Logo } from '../../assets/globant-shops.svg';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container main'>
      <Logo />
    </div>
    <div className='options'>
      <div className='cart'>
        <CartLogo />
      </div>
    </div>
  </div>
);

export default Header;
