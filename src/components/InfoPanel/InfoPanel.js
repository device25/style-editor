import React from 'react';
import PropTypes from 'prop-types';
import './InfoPanel.css';

const InfoPanel = ({ zoom }) => {
  const info = `Zoom: ${zoom.toFixed(2)}`;

  return (
    <div className='infoPanel'>
      {info}
    </div>
  );
};

InfoPanel.propTypes = {
  zoom: PropTypes.number.isRequired
};

export default InfoPanel;
