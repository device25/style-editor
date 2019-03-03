import React from "react";
import "./Editor.css";

const Editor = ({ value, onChange }) => (
  <textarea
    className='Editor'
    value={value}
    onChange={onChange}
  />
);

export default Editor;
