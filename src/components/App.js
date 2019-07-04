import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import { initStyle, initViewport } from '../config';
import 'mapbox-gl/dist/mapbox-gl.css';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

const initValue = JSON.stringify(initStyle, null, 1);

function App() {
  const [viewport, setViewport] = useState(initViewport);
  const [value, setValue] = useState(initValue);
  const [mapStyle, setMapStyle] = useState(initStyle);

  const onViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  const onChange = (newValue) => {
    newValue = newValue.replace(/'/g, '"');
    setValue(newValue);

    try {
      const newStyle = JSON.parse(newValue);
      setMapStyleHandler(newStyle);
    } catch (e) {
      console.error(e);
    }
  };

  const setMapStyleHandler = (newStyle) => {
    setMapStyle(newStyle);
  };

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh'
    }}>
      <MapGL
        style={{
          width: '50%',
          height: '100vh'
        }}
        mapStyle={mapStyle}
        accessToken='pk.eyJ1IjoiZGV2aWNlMjUiLCJhIjoiY2lzaGN3d2tiMDAxOTJ6bGYydDZrcHptdiJ9.UK55aUzBquqYns1AdnuTQg'
        {...viewport}
        onViewportChange={onViewportChange}
      />
      <AceEditor
        style={{
          width: '50%',
          height: '100vh'
        }}
        placeholder='JSON Style here'
        theme='github'
        mode='json'
        name='styleEditor'
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        onChange={onChange}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2
        }}
      />
      <div className='zoomPanel'>
        {`Zoom: ${viewport.zoom.toFixed(2)}`}
      </div>
    </div>
  );
}

export default App;
