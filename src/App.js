import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncApp from './containers/AsyncApp'
import {Provider} from 'react-redux';
import DropzoneContainer from './components/Upload.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DropzoneContainer />
        </div>
        <AsyncApp></AsyncApp>
      </div>
    );
  }
}

export default App;
