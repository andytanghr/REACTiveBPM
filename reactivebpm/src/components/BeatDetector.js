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
    this.setState( { count: 0, bpm: 0, timeInitial: 0, timeNow: 0 });
  }

  handleClick = () => {
    let { count, timeInitial, timeNow } = this.state;

    if (count === 0) {
      this.setState( state => ({ 
        count: count + 1, 
        timeInitial: new Date().getTime() 
      }));
    } else {
      
      // timeNow = new Date().getTime();
      const timeCurrent = new Date().getTime();
      const avgBpm = Math.round( (count * 60000) / (timeNow - timeInitial) );
      this.setState( state => ({ 
        count: count + 1,
        timeNow: timeCurrent,
        bpm: avgBpm
      }));
    }
  }

  render() {
    const { count, bpm } = this.state;

    return(
      <div>

        <div className='beatDetector' onClick={this.handleClick}  >
          <p>Click/tap inside this box or type on the textbox to calculate the beat</p>




        
        </div>
                  <form>
            <input
              type='text' 
              // name='press' 
              value='type here'
              // readonly
              size='5'
              onChange={this.handleClick} />
          </form>
          <div className='showInfo'>
            <p>Total Beats: {count}</p>
            <p>Average Beats per Minute: {bpm}</p>
            {/* <p>Nearest Whole BPM: {}</p> */}
          </div>
        <button onClick={this.handleReset}>Reset</button>



      </div>
    );



  };
}

export default BeatDetector;