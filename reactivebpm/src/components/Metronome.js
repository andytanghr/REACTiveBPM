import React, { Component } from 'react';
import './Metronome.css'

class Metronome extends Component {
  render() {
    let bpm = 100;
    let playing = false;




    return (
      <div className='metronome'>
        <h1>I AM A TICK TOCK</h1>
        <div className='bpmSlider'>
          <h3>Tempo is {bpm} BPM.</h3>
          <input type='range' min='30' max='250' value={bpm} />
        </div>
        <button>{playing ? 'Stop' : 'Start'}</button>
      </div>
    );
  };
}

export default Metronome;