import React, { useEffect } from 'react';
import './piano.css';
import Key from '../key/Key';

function Piano(props) {
   const black_notes = props.notes.filter(({ isFlat }) => isFlat);
   const white_notes = props.notes.filter(({ isFlat }) => !isFlat);

   const white_note_controls = [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ];
   const black_note_controls = [ 's', 'd', 'h', 'j', 'k' ];

   const playNote = (id) => {
      const note = document.getElementById(id);
      note.currentTime = 0;
      note.play();
   };

   useEffect(
      () => {
         document.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            const whiteIndex = white_note_controls.indexOf(e.key);
            const blackIndex = black_note_controls.indexOf(e.key);
            if (whiteIndex > -1) {
               playNote(white_notes[whiteIndex].note);
            }
            if (blackIndex > -1) {
               playNote(black_notes[blackIndex].note);
            }
         });
      },
      [ props ]
   );

   return (
      <React.Fragment>
         <div className='piano-container'>
            {props.notes.map(({ note, isFlat, altName }) => (
               <Key key={note} note={note} isFlat={isFlat} altName={altName} playNote={playNote} />
            ))}
         </div>
         <div>
            {props.notes.map(({ note }) => (
               <audio key={note} id={note} src={`/notes/${note}.mp3`} />
            ))}
         </div>
      </React.Fragment>
   );
}

export default Piano;
