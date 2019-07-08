import React from 'react';
import MapGL from '@urbica/react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const style = {
  width: '50%',
  height: '100vh'
};

const Map = ({ mapStyle, viewport, onViewportChange, showTileBoundaries }) => {
  return (
    <MapGL
      style={style}
      mapStyle={mapStyle}
      accessToken={process.env.REACT_APP_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={onViewportChange}
      showTileBoundaries={showTileBoundaries}
    />
  );
};

export default Map;
