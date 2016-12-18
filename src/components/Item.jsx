import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './Preloader';
import './Item.css';

export default class Item extends React.Component {

  componentDidMount() {
    this.props.observe(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
    this.props.unobserve(ReactDOM.findDOMNode(this));
  }

  render() {
    const { itemKey, data, lazyLoadStarted } = this.props;
    const id = `item-${itemKey}`;
    const body = Item.body(lazyLoadStarted, data);
    return (
      <div id={id} className="Item card" data-key={itemKey}>
        <div className="card-content">
          <span className="card-title blue-grey-text">{itemKey}</span>
          {body}
        </div>
      </div>
    )
  }

  static body(lazyLoadStarted, data) {
    if (!lazyLoadStarted) {
      return null;
    } else if (!data) {
      return (
        <div className="center">
          <Preloader />
        </div>
      );
    } else {
      return (
        <div>{data}</div>
      );
    }
  }

}
