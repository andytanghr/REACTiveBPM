import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router,
  Route, 
  // Link, 
  Switch, 
  Redirect 
} from 'react-router-dom';

// import {  } from './components/NavBar';
import NavBar from './components/NavBar';
import About from './components/About';
import Metronome from './components/Metronome';
import BeatDetector from './components/BeatDetector';
// import { Routes } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <div className='container'>
            <NavBar />

            <Switch>
              <Route exact path='/'>
                <Redirect to='/About' />
              </Route>
              <Route exact path='/about' component={About} />
              <Route exact path='/metronome' component={Metronome} />
              <Route exact path='/beatdetector' component={BeatDetector} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
