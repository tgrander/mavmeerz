import React from 'react'
import { Link, IndexLink } from 'react-router'
import '../css/navbar.css'

const Nav_Auth = () => (
  <div className='nav'>

    <IndexLink
      to="/"
      className="item nav-logo">
      ZENMO
    </IndexLink>

    <Link to="/signup" className="signup item nav-item">Signup</Link>
    <Link to="/signup" className="login item nav-item">Login</Link>

  </div>
)

export default Nav_Auth
