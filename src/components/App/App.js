import React, { useState } from "react";
import "./App.css";
import Map from "../Map/Map";
import Editor from "../Editor/Editor";

function App() {
  const init = JSON.stringify({
    "id": "test-layer",
    "type": "circle",
    "source": "test-source",
    "paint": {
      "circle-radius": 10
    }
  });
  const [style, setStyle] = useState(init);

  const setStyleHandler = (event) => {
    const newStyle = event.target.value;

    setStyle(newStyle);
  };

  return (
    <div className='App'>
      <Map
        style={style}
      />
      <Editor
        value={style}
        onChange={setStyleHandler}
      />
    </div>
  );
}

export default App;
