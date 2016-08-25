import React, { Component, PropTypes } from 'react';
import Axios from 'axios';
import { Link } from 'react-router';
import '../css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  //comment

  static contextTypes = {
    router: PropTypes.object
  }

  onClick() {
    window.localStorage.removeItem('zenmoToken');
    this.props.logout();
  }

  render() {
    return (
      <nav class='fixed-nav-bar'>
        <ul className="nav">
          <li className="item nav-logo"><Link to='' classname='nav-logo'>ZENMO</Link></li>
          <li className="item nav-item"><a href='#' onClick={this.onClick}>Logout</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar
