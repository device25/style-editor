import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({ zoom }) => {
  const info = `Zoom: ${zoom.toFixed(2)}`;

  return (
    <div className='infoPanel'>
      {info}
    </div>
  );
};

export default InfoPanel;
