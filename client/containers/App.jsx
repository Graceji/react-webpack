import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import Routes from '../router';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  handleClick () {
    console.log('点击1'); // eslint-disable-line
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <Link to="/">首页</Link>
          <br />
          <Link to="/detail">详情页</Link>
        </div>
        <Routes />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
