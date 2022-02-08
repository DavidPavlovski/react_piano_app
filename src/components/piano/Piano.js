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
      if (note) {
         note.currentTime = 0;
         note.play();
      }
   };

   useEffect(
      () => {
         document.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            const whiteIndex = white_note_controls.indexOf(e.key);
            const blackIndex = black_note_controls.indexOf(e.key);
            if (whiteIndex > -1) {
               const note = white_notes[whiteIndex].note;
               const key = document.getElementById(`key-${note}`);
               if (key) {
                  key.classList.add('active');
               }
               playNote(note);
            }
            if (blackIndex > -1) {
               const note = black_notes[blackIndex].note;
               const key = document.getElementById(`key-${note}`);
               if (key) {
                  key.classList.add('active');
               }
               playNote(note);
            }
         });
         document.addEventListener('keyup', (e) => {
            const whiteIndex = white_note_controls.indexOf(e.key);
            const blackIndex = black_note_controls.indexOf(e.key);
            if (whiteIndex > -1) {
               const note = white_notes[whiteIndex].note;
               const key = document.getElementById(`key-${note}`);
               if (key) {
                  key.classList.remove('active');
               }
            }
            if (blackIndex > -1) {
               const note = black_notes[blackIndex].note;
               const key = document.getElementById(`key-${note}`);
               if (key) {
                  key.classList.remove('active');
               }
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
