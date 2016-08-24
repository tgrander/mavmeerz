import React from 'react'
import { Link, IndexLink } from 'react-router'
import '../css/navbar.css'

const Nav_Auth = () => (
  <nav class='fixed-nav-bar'>
    <ul className="nav">
      <li><IndexLink to="/">ZENMO</IndexLink></li>
    </ul>
  </nav>
)

export default Nav_Auth
