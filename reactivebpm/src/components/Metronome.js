import React, { Component } from 'react';
import './Metronome.css'

import click from './metronomeOneBeat.wav';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      count: 0,
      bpm: 100
    };
    this.click = new Audio(click);
  }

  handleBpmChange = event => {
    const bpm = event.target.value;
    this.setState( { bpm } );
  }


  startStop = () => {
    // this.click.play();
    if (this.state.playing) {
      // stop timer
      clearInterval(this.timer);
      this.setState( { playing: false} );
    } else {
      // start a timer tied to setInterval
      this.timer = setInterval(
        this.playClick,
        (60 / this.state.bpm) * 1000
      );
      this.setState( 
        {
          count: 0,
          playing: true
        },
        this.playClick
      );
    }
  }

  playClick = () => {
    const { count } = this.state;
    this.click.play();
    this.setState( state => ({
      count: (state.count + 1)
    }));

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
          <h4>{this.count} beats have passed.</h4>
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