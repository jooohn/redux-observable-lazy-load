import React from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import Items from '../components/Items';

const ItemIndexContainer = (props) => (
  <Items {...props} />
);
export default connect(
  ({ itemIndex, items }) => ({
    items: itemIndex.map(key => items[key]).filter(item => !!item)
  }),
  dispatch => ({
    scheduleItemFetch: key => dispatch(Actions.scheduleItemFetch(key)),
    cancelItemFetch: key => dispatch(Actions.cancelItemFetch(key))
  })
)(ItemIndexContainer);
