import React from 'react';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '5px',
  left: '5px',
  zIndex: 1
};

const Options = ({ value, onChange }) => {
  return (
    <div style={style}>
      <label htmlFor='tileBoundaries'>
        <input
          id='tileBoundaries'
          type='checkbox'
          checked={value}
          onChange={onChange}
        />
        Show tile boundaries
      </label>
    </div>
  );
};

Options.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Options;
