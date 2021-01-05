import React from 'react';
import PropTypes from 'prop-types';

import { Item } from '../';

import './item-list.styles.scss';

const ItemList = ({ items }) => (
  <div className='item-list'>
    {items.map((item, index) => (
      <Item key={index} {...item}/>
    ))}
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array
};


export default ItemList;