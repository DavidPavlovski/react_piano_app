import React from 'react';
import './navbar.css';

export default function Navbar(props) {
   return (
      <nav className='navbar'>
         <h2>Piano App</h2>
         <div className='select-container'>
            <label htmlFor='octave-selector'>Octave</label>
            <select
               id='octave-selector'
               name='octave'
               onChange={props.changeOctave}
               defaultValue='octave_5'
            >
               <option value={'octave_1'}>octave 1</option>
               <option value={'octave_2'}>octave 2</option>
               <option value={'octave_3'}>octave 3</option>
               <option value={'octave_4'}>octave 4</option>
               <option value={'octave_5'}>octave 5</option>
               <option value={'octave_6'}>octave 6</option>
               <option value={'octave_7'}>octave 7</option>
            </select>
         </div>
      </nav>
   );
}
