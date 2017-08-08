import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function iplTeamsReducer(state = initialState.iplTeams, action) {
  switch (action.type) {
    case types.LOAD_IPLTEAMS_SUCCESS:
      return action.iplTeams;
    default:
      return state;
  }
}
