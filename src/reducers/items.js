import * as ActionTypes from '../actions';

export default function items(state = {}, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_ITEM:
      return { ...state, [action.payload.item.key]: action.payload.item };
    case ActionTypes.CLEAR_ITEMS:
      return {};
    default:
      return state;
  }
}
