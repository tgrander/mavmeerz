import React, { Component } from 'react';
import ReactAnimate from 'react-addons-css-transition-group'

class App extends Component {
  render() {
    return (
      <main>
        <ReactAnimate transitionName="showForm" transitionEnterTimeout={640} transitionLeaveTimeout={640}>
          {this.props.children}
        </ReactAnimate>
      </main>
    );
  }
}

export default App;
