import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './views/About';
import { Metronome } from './views/Metronome';
import { BeatDetector } from './views/BeatDetector';
import { NoMatch } from './views/NoMatch';


export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'> <Redirect to='/About' /> </Route>
        <Route exact path='/About' component={About} />
        <Route exact path='/Metronome' component={Metronome} />
        <Route exact path='/BeatDetector' component={BeatDetector} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};