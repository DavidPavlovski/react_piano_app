import React from 'react';
import './piano.css';
import Key from '../key/Key';

function Piano(props) {
   console.log(props.notes);
   return (
      <React.Fragment>
         <div className='piano-container'>
            {props.notes.map(({ note, isFlat, altName }) => (
               <Key key={note} note={note} isFlat={isFlat} altName={altName} />
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
