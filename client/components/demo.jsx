import React from 'react';

function Demo(props) {
  return (
    <div>
      <h1>This is a demo, so no real purchases can or will be made.</h1>
      <button onClick={() => {
        props.setView('catalog', {});
      }}>I understand</button>
    </div>
  );
}

export default Demo;
