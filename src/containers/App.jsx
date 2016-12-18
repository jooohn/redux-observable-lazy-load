import React from 'react';
import SearchBoxContainer from './SearchBoxContainer';
import ItemIndexContainer from './ItemIndexContainer';
import ItemsContainer from './ItemsContainer';
import './App.css';

const App = () => (
  <div className="App">
    <SearchBoxContainer />
    <div className="row App--contents">
      <div className="col s3 ItemIndexContainer">
        <ItemIndexContainer />
      </div>
      <div className="col s9 ItemsContainer">
        <ItemsContainer />
      </div>
    </div>
  </div>
);
export default App;
