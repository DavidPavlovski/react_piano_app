import React from 'react';
import './key.css';

function Key({ isFlat, altName, playNote, note, pressedKeys }) {
   const handlePlayNote = () => {
      playNote(note);
   };
   const keyPressed = pressedKeys.indexOf(note) !== -1 ? 'active' : '';
   const noteIsFlat = isFlat ? 'black' : 'white';
   return (
      <div
         id={`key-${note}`}
         className={`key ${noteIsFlat} ${keyPressed}`}
         onClick={handlePlayNote}
      >
         <span className='note-name'>{altName}</span>
         <audio id={note} src={`/notes/${note}.mp3`} />
      </div>
   );
}

export default Key;
