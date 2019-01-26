import React, { Component } from 'react';
import './BeatDetector.css'

class BeatDetector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      bpm: 0
    }
  }

  handleReset = () => {
    this.setState( { count: 0, bpm: 0 });
  }

  handleClick = () => {
    const { count } = this.state;
    const timeInitial = new Date().getTime();
    const timeNow = new Date().getTime();

    if (count === 0) {
      this.setState( state => ({ count: state.count + 1} ) );
    } else {
      
      const avgBpm = Math.round( (count * 60000) / (timeNow - timeInitial) );

      this.setState( state => ({ 
        count: state.count + 1,
        bpm: avgBpm
      }));
    }

    
    // let timeNow = new Date.getTime();
    // let avgBpm = 
    

  }



  render() {
    const { count, bpm } = this.state;

    return(
      <div className='beatDetector'>
        <button onClick={this.handleReset}>Reset</button>
        
        <div className='showInfo'>
          <p>Total Beats: {count}</p>
          <p>Average BPM: {bpm} (not really, just shows difference in time for now</p>
          <p>Nearest Whole BPM: {}</p>
        </div>


        <div className='clickWindow' onClick={this.handleClick} >
          <p> tap me for the beat </p>
        </div>


        <form>
          <input
            type='text' 
            name='press' 
            value='key press me' />
        </form>

      </div>
    );



  };
}

export default BeatDetector;