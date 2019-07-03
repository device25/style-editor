import React, { useState, createRef } from 'react';
import { validate } from '@mapbox/mapbox-gl-style-spec';
import './App.css';

import Map from '../Map/Map';
import Editor from '../Editor/Editor';

function App() {
  const init = JSON.stringify({
    version: 8,
    sources: {
      'test-source': {
        type: 'geojson',
        data: {
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
    },
    layers: [{
      id: 'test-layer',
      source: 'test-source',
      type: 'circle',
      paint: {}
    }]
  }, null, 1);
  const [style, setStyle] = useState(init);
  const editorRef = createRef();

  const setStyleHandler = () => {
    const { value } = editorRef.current;

    if (validate(editorRef.current.value).length === 0) {
      setStyle(value);
    }
  };

  return (
    <div className='App'>
      <Map style={style} />
      <Editor
        editorRef={editorRef}
        value={style}
        onChange={setStyleHandler}
      />
    </div>
  );
}

export default App;
