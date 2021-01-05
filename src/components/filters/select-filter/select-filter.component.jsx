import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = ({ options }) => (
  <select>
    {options.map((option, index) => (
      <option key={index} value={option.value}>{option.name}</option>
    ))}
  </select>
);

SelectFilter.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array
};

export default SelectFilter;
