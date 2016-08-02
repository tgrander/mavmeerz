import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncApp from './containers/AsyncApp'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <AsyncApp></AsyncApp>
      </Provider>
    );
  }
}

export default App;
