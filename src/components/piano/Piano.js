import React, { useEffect, useState } from 'react';
import './piano.css';
import Key from '../key/Key';

function Piano({ notes }) {
   const [ pressedKeys, setPressedKeys ] = useState(() => []);
   const black_notes = notes.filter(({ isFlat }) => isFlat);
   const white_notes = notes.filter(({ isFlat }) => !isFlat);

   const white_note_controls = [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
   const black_note_controls = [ 's', 'd', 'h', 'j', 'k' ];

   const playNote = (id) => {
      const note = document.getElementById(id);
      if (note) {
         note.currentTime = 0;
         note.play();
      }
   };

   const handleKeyDown = (e) => {
      if (e.repeat) return;
      const whiteIndex = white_note_controls.indexOf(e.key);
      const blackIndex = black_note_controls.indexOf(e.key);
      if (whiteIndex > -1) {
         const note = white_notes[whiteIndex].note;
         setPressedKeys((prevKeys) => [ ...prevKeys, note ]);
         playNote(note);
      }
      if (blackIndex > -1) {
         const note = black_notes[blackIndex].note;
         setPressedKeys((prevKeys) => [ ...prevKeys, note ]);
         playNote(note);
      }
   };

   const handleKeyUp = (e) => {
      const whiteIndex = white_note_controls.indexOf(e.key);
      const blackIndex = black_note_controls.indexOf(e.key);
      if (whiteIndex > -1) {
         const note = white_notes[whiteIndex].note;
         setPressedKeys((prevKeys) => {
            return prevKeys.filter((key) => key !== note);
         });
      }
      if (blackIndex > -1) {
         const note = black_notes[blackIndex].note;
         setPressedKeys((prevKeys) => {
            return prevKeys.filter((key) => key !== note);
         });
      }
   };

   useEffect(
      () => {
         window.addEventListener('keydown', handleKeyDown);
         window.addEventListener('keyup', handleKeyUp);
      },
      [ notes ]
   );

   return (
      <React.Fragment>
         <div className='piano-container'>
            {notes.map(({ note, isFlat, altName }) => (
               <Key
                  key={note}
                  note={note}
                  isFlat={isFlat}
                  altName={altName}
                  playNote={playNote}
                  pressedKeys={pressedKeys}
               />
            ))}
         </div>
      </React.Fragment>
   );
}

export default Piano;
