import React from 'react';

const style = {
  position: 'absolute',
  top: '5px',
  left: '5px',
  zIndex: 1
};

const Options = ({ value, onChange }) => {
  return (
    <div style={style}>
      <label>
        <input
          type='checkbox'
          checked={value}
          onChange={onChange}
        />
        Show tile boundaries
      </label>
    </div>
  );
};

export default Options;
