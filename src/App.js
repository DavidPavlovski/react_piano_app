import React, { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Piano from './components/piano/Piano';

import notes from './notes';
function App() {
   const [ octave, setOctave ] = useState('octave_5');

   const handleOctaveChange = (e) => {
      setOctave(e.target.value);
   };

   return (
      <div>
         <Navbar changeOctave={handleOctaveChange} />
         <Piano notes={notes[octave].notes} />
      </div>
   );
}

export default App;
