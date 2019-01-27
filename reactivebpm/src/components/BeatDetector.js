import React, { Component } from 'react';
import './BeatDetector.css'

class BeatDetector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      bpm: 0,
      timeInitial: 0,
      timeNow: 0
    }
  }

  handleReset = () => {
    this.setState( { count: 0, bpm: 0 });
  }

  handleClick = () => {
    let { count, timeInitial, timeNow } = this.state;

    if (count === 0) {
      this.setState( state => ({ count: state.count + 1, timeInitial: new Date().getTime() } ) );

    } else {
      timeNow = new Date().getTime();

      this.setState( state => ({ 
        count: state.count + 1,
        timeNow: new Date().getTime(),
        bpm: Math.round( (count * 60000) / (timeNow - timeInitial) )
      }));
    }
  }

  render() {
    const { count, bpm } = this.state;

    return(
      <div className='beatDetector'>
        <button onClick={this.handleReset}>Reset</button>
        
        <div className='showInfo'>
          <p>Total Beats: {count}</p>
          <p>Average Beats per Minute: {bpm}</p>
        </div>

        <div className='clickWindow' onClick={this.handleClick} >
          <p> tap me for the beat </p>
        </div>

        {/* <form>
          <input
            type='text' 
            name='press' 
            value='key press me' />
        </form> */}
      </div>
    );
  };
}

export default BeatDetector;