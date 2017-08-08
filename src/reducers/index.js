import {combineReducers} from 'redux';
import players from './playerReducer';
import iplTeams from './iplTeamsReducer';

const rootReducer = combineReducers({
  players,
  iplTeams
});

export default rootReducer;
