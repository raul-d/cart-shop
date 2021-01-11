import React from 'react';
import PropTypes from 'prop-types';

import './field.styles.scss';

const Field = ({ label, type, id }) => (
  <div className='field'>
    <label>
      {label}
    </label>

    <input type={type} id={id} />
  </div>
);

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  for: PropTypes.string,
  id: PropTypes.any
};

export default Field;
