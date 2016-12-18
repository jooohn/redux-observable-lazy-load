import React from 'react';
import SearchBox from '../components/SearchBox';
import { keywordChanged } from '../actions';
import { connect } from 'react-redux';

const SearchBoxContainer = ({ keyword, handleKeywordChange }) => (
  <SearchBox keyword={keyword} handleKeywordChange={handleKeywordChange} />
);
export default connect(
  ({ keyword }) => ({ keyword }),
  dispatch => {
    dispatch(keywordChanged('keyword'));
    return {
      handleKeywordChange: (e) => {
        e.preventDefault();
        dispatch(keywordChanged(e.target.value));
      }
    };
  }
)(SearchBoxContainer);
