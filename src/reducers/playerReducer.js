import * as types from '../actions/actionTypes';

export default function playerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_PLAYER:
      return [...state,
        Object.assign({},action.player)
      ];
    default:
      return state;
  }
}
