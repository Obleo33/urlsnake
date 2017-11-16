import React, { Component } from 'react';
import './App.css';

import SubmitUrl from '../SubmitUrl/SubmitUrl'
import scrapeURL from '../../helper/scrapeURL'

class App extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      webText: ''
    }
  }

  getUrl (url) {
    this.setState({ url })
    this.scrapeURL(url)
  }

  scrapeURL (userURL) {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = `https://${cors_api_host}/${userURL}`;

    fetch(cors_api_url)
    .then(response => response.text())
    .then(webText => this.setState({ webText }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to URLSnake</h1>
        <SubmitUrl getUrl={ this.getUrl.bind(this) }/>
        {this.state.webText.length}
      </div>
    );
  }
}

export default App;

// import { Route, Link, NavLink } from 'react-router-dom'
