import React from 'react';
import MapGL from '@urbica/react-map-gl';

const Map = ({ style }) => (
  <MapGL
    style={{
      width: '50%',
      height: '100vh'
    }}
    mapStyle={JSON.parse(style)}
    accessToken='pk.eyJ1IjoiZGV2aWNlMjUiLCJhIjoiY2lzaGN3d2tiMDAxOTJ6bGYydDZrcHptdiJ9.UK55aUzBquqYns1AdnuTQg'
    latitude={0}
    longitude={0}
    zoom={11}
  />
);

export default Map;
