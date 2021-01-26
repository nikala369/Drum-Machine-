import React from 'react';
import './comp2.css';

function Component2() { 
  return(
    <div className="right-side">
      <div></div>

      <div className="empty-div"></div>
      <input className="input-style-range" type="range" name="volume" id="volume" min="0" max="100" />

      <h3 style={{color: 'white'}} >Bank</h3>
      <div></div>
    </div>
  );
}

export default Component2;
