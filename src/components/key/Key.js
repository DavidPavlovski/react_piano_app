import React from 'react';
import './key.css';

function Key({ isFlat, noteName }) {
   return (
      <div className={`key ${isFlat ? 'black' : 'white'}`}>
         <span className='note-name'>{noteName}</span>
      </div>
   );
}

export default Key;
