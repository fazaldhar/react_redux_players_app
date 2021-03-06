import * as types from './actionTypes';
import playerApi from '../api/mockPlayerApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusAction";

/*export function createPlayer(player) {
  return {type: types.CREATE_PLAYER, player}; // es6 syntax player: player
}*/

export function loadPlayersSuccess(players) {
  return {type: types.LOAD_PLAYER_SUCCESS, players}; // es6 syntax player: player
}

export function updatePlayerSuccess(player) {
  return{type: types.UPDATE_PLAYER_SUCCESS, player};
}

export function createPlayerSuccess(player) {
  return{type: types.CREATE_PLAYER_SUCCESS, player};
}

export function loadPlayers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return playerApi.getAllCourses().then(players => {
      dispatch(loadPlayersSuccess(players));
    }).catch(error => {
      throw(error);
    });
  };
}

export function savePlayer(player) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return playerApi.savePlayer(player).then(savedPlayer => {
      player.id ? dispatch(updatePlayerSuccess(savedPlayer)) :
        dispatch(createPlayerSuccess(savedPlayer));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
