import { combineReducers } from 'redux';
import keyword from './keyword';
import itemIndex from './itemIndex';
import items from './items';
export default combineReducers({
  keyword,
  itemIndex,
  items
});
