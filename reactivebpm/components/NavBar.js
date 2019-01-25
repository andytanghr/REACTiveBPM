import React from 'react';
import { Link } from 'react-reactor-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><a href=''>About</a></li>
        <li><a href=''>Metronome</a></li>
        <li><a href=''>Beat Detector</a></li>
      </ul>
      <hr/>

    </div>
  )
}

export default NavBar;