import React from 'react';
import PropTypes from 'prop-types';

const InputFilter = ({ type, value, label }) => (
  <div>
    <input type={type} value={value}/> { label }
  </div>
);

InputFilter.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string
};

export default InputFilter;

