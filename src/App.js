import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncApp from './containers/AsyncApp'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js'
import DropzoneContainer from './components/Upload.js'

const store = configureStore()


class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <DropzoneContainer />
          </div>
        </div>
<<<<<<< 773e2f54062ba61d1a1798ca47a5a5541340d6b7
        <AsyncApp></AsyncApp>
      </Provider>
=======
      // </Provider>
>>>>>>> fixing merge conflict
    );
  }
}

export default App;
