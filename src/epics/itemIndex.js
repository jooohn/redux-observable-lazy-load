import * as Actions from '../actions';

function dummyIndex(keyword) {
  if (!keyword.trim()) {
    return [];
  }

  const prefix = keyword.split(/\s+/).join('-').toUpperCase();
  const size = Math.floor(50 + Math.random() * 50);
  return Array.apply(null, Array(size))
    .map((_, index) => `${prefix}-${index}`);
}

const dummyDuration = 1000;
const itemIndex = action$ =>
  action$.ofType(Actions.KEYWORD_CHANGED)
    .delay(dummyDuration)
    .map(({ payload: { keyword } }) => dummyIndex(keyword))
    .map(Actions.receiveItemIndex);
export default itemIndex;
