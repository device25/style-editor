export default {
  version: 8,
  sources: {
    'test-source': {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [
                0,
                0
              ]
            }
          }
        ]
      }
    }
  },
  layers: [
    {
      id: 'test-layer',
      source: 'test-source',
      type: 'circle',
      paint: {
        'circle-radius': 10
      }
    }
  ]
};
