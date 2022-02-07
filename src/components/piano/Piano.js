import React from 'react';
import './piano.css';
import Key from '../key/Key';

function Piano(props) {
   return (
      <div className='piano-container'>
         {props.notes.map(({ note, isFlat, altName }) => (
            <Key key={note} note={note} isFlat={isFlat} altName={altName} />
         ))}
      </div>
   );
}

export default Piano;
