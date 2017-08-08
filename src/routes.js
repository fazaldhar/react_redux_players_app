import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PlayersPage from './components/player/PlayersPage';
import ManagePlayerPage from './components/player/ManagaPlayerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="players" component={PlayersPage}/>
    <Route path="player" component={ManagePlayerPage}/>
    <Route path="player/:id" component={ManagePlayerPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
