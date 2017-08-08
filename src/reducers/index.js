import {combineReducers} from 'redux';
import players from './playerReducer';
import iplTeams from './iplTeamsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  players,
  iplTeams,
  ajaxCallsInProgress
});

export default rootReducer;
