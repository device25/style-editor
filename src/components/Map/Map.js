import React from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';

const Map = ({ style }) => (
  <MapGL
    style={{
      width: '50%',
      height: '100vh'
    }}
    mapStyle={{
      version: 8,
      sources: {},
      layers: []
    }}
    accessToken='pk.eyJ1IjoiZGV2aWNlMjUiLCJhIjoiY2lzaGN3d2tiMDAxOTJ6bGYydDZrcHptdiJ9.UK55aUzBquqYns1AdnuTQg'
    latitude={0}
    longitude={0}
    zoom={11}
  >
    <Source
      id='test-source'
      type='geojson'
      data={{
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          }
        }]
      }
      }
    />
    <Layer
      id='test-layer'
      type='circle'
      source='test-source'
      {...JSON.parse(style)}
    />
  </MapGL>
);

export default Map;
