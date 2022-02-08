import React from 'react';
import './key.css';

function Key({ isFlat, altName, playNote, note }) {
   const handlePlayNote = () => {
      playNote(note);
   };
   return (
      <div className={`key ${isFlat ? 'black' : 'white'}`} onClick={handlePlayNote}>
         <span className='note-name'>{altName}</span>
      </div>
   );
}

export default Key;
