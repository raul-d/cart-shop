import React from 'react';

import { InputFilter, SelectFilter } from '../filters';

import './sidebar.styles.scss';

const options = [{
  value: 'relevant',
  name: 'Relevant'
}];

const Sidebar = () => (
  <div className='sidebar'>
    <div>
      <p>Filters:</p>
      <InputFilter
        type='checkbox'
        value='basics'
        label='Basics'
      />
    </div>
    <div>
      <p>Prices:</p>
      <InputFilter
        type='radio'
        value='1-50'
        label='$1 - $50'
      />
      <InputFilter
        type='radio'
        value='51-100'
        label='$51 - $100'
      />
      <InputFilter
        type='radio'
        value='101-200'
        label='$101 - $200'
      />
    </div>
    <div>
      <p>Sort by:</p>
      <SelectFilter options={options} />
    </div>
  </div>
);

export default Sidebar;