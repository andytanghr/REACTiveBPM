import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Metronome'>Metronome</Link></li>
        <li><Link to='/BeatDetector'>Beat Detector</Link></li>
      </ul>
      <hr/>

    </div>
  )
}

export default NavBar;