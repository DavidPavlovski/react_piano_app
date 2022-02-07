import React, { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Piano from './components/piano/Piano';

function App() {
   const [ octave, setOctave ] = useState('octave_1');

   const handleOctaveChange = (e) => {
      setOctave(e.target.value);
   };
   return (
      <div>
         <Navbar changeOctave={handleOctaveChange} />
         <Piano />
      </div>
   );
}

export default App;
