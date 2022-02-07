import React from 'react';
import './piano.css';
import Key from '../key/Key';

function Piano() {
   return (
      <div className='piano-container'>
         <Key isFlat={false} noteName={'C'} />
         <Key isFlat={true} noteName={'Db'} />
         <Key isFlat={false} noteName={'D'} />
         <Key isFlat={true} noteName={'Eb'} />
         <Key isFlat={false} noteName={'E'} />
         <Key isFlat={false} noteName={'F'} />
         <Key isFlat={true} noteName={'Gb'} />
         <Key isFlat={false} noteName={'G'} />
         <Key isFlat={true} noteName={'Ab'} />
         <Key isFlat={false} noteName={'A'} />
         <Key isFlat={true} noteName={'Bb'} />
         <Key isFlat={false} noteName={'C'} />
      </div>
   );
}

export default Piano;
