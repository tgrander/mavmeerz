import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UploadApp from './containers/UploadApp'
import ExpensesApp from './containers/ExpensesApp'
import ReactAnimate from './react-addons-css-transition-group'

class App extends Component {
  render() {
    return (
      <main>
      
        <div className="App-header">
          <div className="title"> ZENMO </div>
            <img src={logo} className="App-logo" alt="logo" />
            <UploadApp />
        </div>

        <ReactAnimate transitionName="showForm" transitionEnterTimeout={640} transitionLeaveTimeout={640}>
          {this.props.children}
        </ReactAnimate>

      </main>
    );
  }
}

export default App;
