import IplTeamsApi from '../api/mockIplTeamsApi';
import * as types from './actionTypes';
import {beginAjaxCall} from "./ajaxStatusAction";

export function loadIplTeamsSuccess(iplTeams) {
  return {type: types.LOAD_IPLTEAMS_SUCCESS, iplTeams};
}

export function loadIplTeams() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return IplTeamsApi.getAllTeams().then(iplTeams => {
      dispatch(loadIplTeamsSuccess(iplTeams));
    }).catch(error => {
      throw(error);
    });
  };
}
