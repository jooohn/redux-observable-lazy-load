import * as ActionTypes from '../actions';

export default function keyword(state = '', action) {
  switch (action.type) {
    case ActionTypes.KEYWORD_CHANGED:
      return action.payload.keyword;
    default:
      return state;
  }
}
