import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PlayersPage from './components/player/PlayersPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="players" component={PlayersPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
