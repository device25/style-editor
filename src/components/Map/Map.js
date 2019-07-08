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
      accessToken='pk.eyJ1IjoiZGV2aWNlMjUiLCJhIjoiY2lzaGN3d2tiMDAxOTJ6bGYydDZrcHptdiJ9.UK55aUzBquqYns1AdnuTQg'
      {...viewport}
      onViewportChange={onViewportChange}
      showTileBoundaries={showTileBoundaries}
    />
  );
};

export default Map;
