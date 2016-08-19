import React from 'react'
import { Link, IndexLink } from 'react-router'
import '../css/navbar.css'

const Nav_Auth = () => (
  <nav class='fixed-nav-bar'>
    <ul className="nav">
      <li><IndexLink to="/">ZENMO</IndexLink></li>
      <li className="nav-item"><Link to='/' classname='nav-logo'>About</Link></li>
      <li className="nav-item"><Link to='/' classname='nav-logo'>Dev Team</Link></li>
    </ul>
  </nav>
)

export default Nav_Auth
