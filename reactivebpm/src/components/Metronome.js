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
      tempoMarking: 'moderato'
    };
    this.click = new Audio(click);
  }

  handleBpmChange = event => {
    const bpm = event.target.value;
    
    let marking = '';
    if (bpm >= 40 && bpm < 60) {
      marking = 'largo';
    } else if (bpm >= 60 && bpm < 66) {
      marking = 'larghetto';
    } else if (bpm >= 66 && bpm < 76) {
      marking = 'adagio';
    } else if (bpm >= 76 && bpm < 108) {
      marking = 'andante';
    } else if (bpm >= 108 && bpm < 120) {
      marking = 'moderato';
    } else if (bpm >= 120 && bpm < 168) {
      marking = 'allegro';
    } else if (bpm >= 168 && bpm < 200) {
      marking = 'presto';
    } else { // (bpm > 200)
      marking = 'prestissimo';
    } 
    
    if (this.state.playing) {
      // stop current beat count and start new one
      clearInterval(this.timer);
      this.timer = setInterval( this.playClick, (60 / bpm) * 1000 );
      // set new bpm, reset beat count
      this.setState( { count: 0, bpm, tempoMarking: marking } );
    } else {
      // update the bpm
      this.setState( { bpm, tempoMarking: marking } );
    }
  }

  startStop = () => {
    if (this.state.playing) {
      // stop timer
      clearInterval(this.timer);
      this.setState( { playing: false} );
    } else {
      // start a timer tied to setInterval
      this.timer = setInterval( this.playClick, (60 / this.state.bpm) * 1000 );
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
    // const { count } = this.state;
    this.click.play();
    this.setState( state => ({
      count: (state.count + 1)
    }));

  }

  render() {
    const { playing, bpm, count, tempoMarking } = this.state;

    return (
      <div className='metronome'>
        <h1>I AM A TICK TOCK</h1>
        <div className='bpmSlider'>
          <h3>Tempo is {tempoMarking} at {bpm} BPM.</h3>
          <h4>{count} beats have passed.</h4>
          <input 
            type='range' 
            min='40' 
            max='240' 
            value={bpm} 
            onChange={this.handleBpmChange} />
        </div>
        <button onClick={this.startStop}>
          {playing ? 'stop' : 'start'}
        </button>
      </div>
    );
  };
}

export default Metronome;