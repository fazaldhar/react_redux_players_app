import * as types from './actionTypes';

export function createPlayer(player) {
  return {type: types.CREATE_PLAYER, player}; // es6 syntax player: player
}
