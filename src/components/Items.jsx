import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import 'intersection-observer';
import './Items.css';

export default class Items extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ observer: this.newObserver() });
  }

  newObserver() {
    return new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target;
        const targetKey = target.dataset.key;
        if (!targetKey) {
          return;
        }

        if (0 < entry.intersectionRatio) {
          this.props.scheduleItemFetch(targetKey);
        } else {
          this.props.cancelItemFetch(targetKey);
        }
      });
    }, {
      root: ReactDOM.findDOMNode(this),
      rootMargin: '100px'
    });
  }

  componentWillUnmount() {
    this.state.observer.disconnect();
  }

  observe(elem) {
    this.state.observer.observe(elem);
  }

  unobserve(elem) {
    this.state.observer.unobserve(elem);
  }

  render() {
    const items = this.props.items.map(item =>
      <Item key={item.key}
            itemKey={item.key}
            observe={this.observe.bind(this)}
            unobserve={this.unobserve.bind(this)}
            {...item} />
    );

    return (
      <div className="Items">{this.state.observer && items}</div>
    );
  }

}
