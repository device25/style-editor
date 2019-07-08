import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

const style = {
  width: '50%',
  height: '100vh'
};

const options = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2
};

const Editor = ({ value, onChange }) => {
  return (
    <AceEditor
      style={style}
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
      setOptions={options}
    />
  );
};

export default Editor;
