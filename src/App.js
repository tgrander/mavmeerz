import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropzoneContainer from './components/Upload.js'
import ExpensesApp from './containers/ExpensesApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <DropzoneContainer />
        </div>
        <ExpensesApp></ExpensesApp>
      </div>
    );
  }
}

export default App;
