import React, { Component } from 'react';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom'

import SubmitUrl from '../SubmitUrl/SubmitUrl'


class App extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
    }
  }

  getUrl (url) {
    this.setState({ url })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to URLSnake</h1>
        <SubmitUrl getUrl={ this.getUrl.bind(this) }/>
      </div>
    );
  }
}

export default App;
