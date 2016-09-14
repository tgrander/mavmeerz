import React, { Component, PropTypes } from 'react';
import Axios from 'axios';
import { Link } from 'react-router';
import '../css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  onClick() {
    window.localStorage.removeItem('zenmoToken');
    this.props.logout();
  }

  render() {
    return (
      <header className='nav nav-dash'>
        <a href='' className='item-dash nav-logo'>ZENMO</a>
        <a href='' className='logout item-dash nav-item' onClick={this.onClick}>Logout</a>
      </header>
    )
  }
}

export default Navbar
