import React from 'react'
import { Link } from 'react-router'
import '../css/navbar.css'

const Navbar = () => (
  <nav class='fixed-nav-bar'>
    <ul className="nav">
      <li className="nav-logo"><Link to='/' classname='nav-logo'>ZENMO</Link></li>
      <li className="nav-item"><Link to='/login' classname='nav-logo'>About</Link></li>
      <li className="nav-item"><Link to='/login' classname='nav-logo'>Dev Team</Link></li>
      <li className="nav-item"><Link to='/login' classname='nav-logo'>Logout</Link></li>
    </ul>
  </nav>
)

export default Navbar
