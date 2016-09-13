import React from 'react'
import { Link, IndexLink } from 'react-router'
import '../css/navbar.css'

const Nav_Auth = () => (
  <header className='nav' role='banner'>

    <IndexLink
      to="/"
      className="item nav-logo">
      ZENMO
    </IndexLink>

    <Link to="/signup" className="signup item nav-item">Signup</Link>
    <Link to="/signup" className="login item nav-item">Login</Link>

  </header>
)

export default Nav_Auth
