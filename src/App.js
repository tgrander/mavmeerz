import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UploadApp from './containers/UploadApp'
import ExpensesApp from './containers/ExpensesApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="title"> ZENMO </div>
            <img src={logo} className="App-logo" alt="logo" />
            <UploadApp />
        </div>
        <ExpensesApp />
      </div>
    );
  }
}

export default App;
