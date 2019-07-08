import React, { PureComponent } from 'react';
import { initStyle, initViewport } from '../config';

import Options from './Options';
import Map from './Map';
import Editor from './Editor';
import InfoPanel from './InfoPanel';

const initValue = JSON.stringify(initStyle, null, 1);
const style = {
  display: 'flex',
  width: '100vw',
  height: '100vh'
};

class App extends PureComponent {
  state = {
    viewport: initViewport,
    value: initValue,
    mapStyle: initStyle,
    showTileBoundaries: false
  };

  onViewportChange = (newViewport) => {
    this.setState({ viewport: newViewport });
  };

  onChange = (newValue) => {
    const doubleQuotesValue = newValue.replace(/'/g, '"');
    this.setState({ value: doubleQuotesValue });

    try {
      const newStyle = JSON.parse(doubleQuotesValue);
      this.setMapStyle(newStyle);
    } catch (e) {
      console.error(e);
    }
  };

  setMapStyle = (newStyle) => {
    this.setState({ mapStyle: newStyle });
  };

  onOptionsChange = (e) => {
    this.setState({ showTileBoundaries: e.target.checked });
  };

  render() {
    const { mapStyle, viewport, showTileBoundaries, value } = this.state;
    const { zoom } = viewport;

    return (
      <div
        style={style}
      >
        <Options
          value={showTileBoundaries}
          onChange={this.onOptionsChange}
        />
        <Map
          mapStyle={mapStyle}
          viewport={viewport}
          onViewportChange={this.onViewportChange}
          showTileBoundaries={showTileBoundaries}
        />
        <Editor
          value={value}
          onChange={this.onChange}
        />
        <InfoPanel
          zoom={zoom}
        />
      </div>
    );
  }
}

export default App;
