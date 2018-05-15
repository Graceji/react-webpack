import React, { Component } from 'react';
// import { hot } from 'react-hot-loader'; // eslint-disable-line

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  handleClick () {
    console.log('点击'); // eslint-disable-line
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        点我
      </button>
    );
  }
}
