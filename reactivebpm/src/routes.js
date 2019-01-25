import React from 'react';
import { Metronome } from './views/Metronome';
import { BeatDetector } from './views/BeatDetector';
import { About } from './views/About';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/Metronome' component={Metronome} />
        <Route exact path='/BeatDetector' component={BeatDetector} />
        <Route exact path='/About' component={About} />
      </Switch>
    </div>
  );
};