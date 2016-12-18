import React from 'react';
import { connect } from 'react-redux';
import ItemIndex from '../components/ItemIndex';

const ItemIndexContainer = ({ itemIndex }) => (
  <ItemIndex itemIndex={itemIndex} />
);
export default connect(
  ({ itemIndex }) => ({ itemIndex }),
  dispatch => ({})
)(ItemIndexContainer);
