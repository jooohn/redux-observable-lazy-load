import { combineEpics } from 'redux-observable';
import itemIndex from './itemIndex';
import items from './items';

export default combineEpics(
  itemIndex,
  items
);
