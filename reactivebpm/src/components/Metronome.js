import React, { Component } from 'react';
import './Metronome.css'

import click from './metronomeOneBeat.wav';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
    this.click = new Audio(click);
  }

  handleBpmChange = event => {
    const bpm = event.target.value;
    this.setState( { bpm } );
  }


  startStop = () => {
    this.click.play();
  }

  render() {
    const { playing, bpm } = this.state;
    // let bpm = 100;
    // let playing = false;




    return (
      <div className='metronome'>
        <h1>I AM A TICK TOCK</h1>
        <div className='bpmSlider'>
          <h3>Tempo is {bpm} BPM.</h3>
          <input 
            type='range' 
            min='40' 
            max='240' 
            value={bpm} 
            onChange={this.handleBpmChange} />
        </div>
        <button onClick={this.startStop}>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  };
}

export default Metronome;