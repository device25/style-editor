import React from "react";
import MapGL, { Source, Layer } from "@urbica/react-map-gl";
import Immutable from "immutable";

const Map = ({ style }) => (
  <MapGL
    style={{
      width: "50%",
      height: "100vh"
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
      source={Immutable.fromJS({
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [{
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [0, 0]
            }
          }]
        }
      })}
    />
    <Layer
      id='test-layer'
      layer={Immutable.fromJS(JSON.parse(style))}
    />
  </MapGL>
);

export default Map;
