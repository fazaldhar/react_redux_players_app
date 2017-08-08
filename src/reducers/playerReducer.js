import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playerReducer(state = initialState.players, action) {
  switch (action.type) {
    /*case types.CREATE_PLAYER:
      return [...state,
        Object.assign({},action.player)
      ];*/
    case types.LOAD_PLAYER_SUCCESS:
      return action.players;
    case types.CREATE_PLAYER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.player)
      ];
    case types.UPDATE_PLAYER_SUCCESS:
      return [
        ...state.filter(player => player.id !== action.player.id),
        Object.assign({}, action.player)
      ];
    default:
      return state;
  }
}
