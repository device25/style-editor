import React, { useState, createRef } from 'react';
import MapGL from '@urbica/react-map-gl';
import { validate } from '@mapbox/mapbox-gl-style-spec';
import { initStyle, initViewport } from '../config';
import 'mapbox-gl/dist/mapbox-gl.css';
import AceEditor from "react-ace";
import 'brace/mode/json';
import 'brace/theme/github';

const initStyleString = JSON.stringify(initStyle, null, 1);

function App() {
  const [style, setStyle] = useState(initStyleString);
  const [viewport, setViewport] = useState(initViewport);
  const editorRef = createRef();
  let editorStyle;

  const onViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  const onEditorChange = (newStyleValue) => {
    editorStyle = newStyleValue;
  };

  const setStyleHandler = () => {
    let value = editorStyle;
    value = value.replace(/'/g, '"');

    const result = validate(value);

    if (result.length === 0) {
      setStyle(value);
    } else {
      result.forEach(({ message }) => console.error(message));
    }
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
        mapStyle={JSON.parse(style)}
        accessToken='pk.eyJ1IjoiZGV2aWNlMjUiLCJhIjoiY2lzaGN3d2tiMDAxOTJ6bGYydDZrcHptdiJ9.UK55aUzBquqYns1AdnuTQg'
        {...viewport}
        onViewportChange={onViewportChange}
      />
      <AceEditor
        style={{
          width: '50%',
          height: '100vh'
        }}
        ref={editorRef}
        placeholder="JSON Style here"
        theme="github"
        mode="json"
        name="styleEditor"
        fontSize={12}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={style}
        onChange={onEditorChange}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <button onClick={setStyleHandler}>
        apply
      </button>

      <div className='zoomPanel'>Zoom:{viewport.zoom.toFixed(2)}</div>

    </div>
  );
}

export default App;
