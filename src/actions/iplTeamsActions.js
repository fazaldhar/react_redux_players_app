import IplTeamsApi from '../api/mockIplTeamsApi';
import * as types from './actionTypes';

export function loadIplTeamsSuccess(iplTeams) {
  return {type: types.LOAD_IPLTEAMS_SUCCESS, iplTeams};
}

export function loadIplTeams() {
  return dispatch => {
    return IplTeamsApi.getAllTeams().then(iplTeams => {
      dispatch(loadIplTeamsSuccess(iplTeams));
    }).catch(error => {
      throw(error);
    });
  };
}
