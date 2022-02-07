import React from 'react';
import './key.css';

function Key({ isFlat, altName }) {
   return (
      <div className={`key ${isFlat ? 'black' : 'white'}`}>
         <span className='note-name'>{altName}</span>
      </div>
   );
}

export default Key;
