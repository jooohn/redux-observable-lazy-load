import * as ActionTypes from '../actions';

export default function itemIndex(state = [], action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_ITEM_INDEX:
      return action.payload.itemIndex;
    default:
      return state;
  }
}
