import React from 'react';
import './Editor.css';

const Editor = ({ editorRef, value, onChange }) => (
  <React.Fragment>
    <textarea
      ref={editorRef}
      className='Editor'
      defaultValue={value}
    />
    <button onClick={onChange}>
      apply
    </button>
  </React.Fragment>
);

export default Editor;
