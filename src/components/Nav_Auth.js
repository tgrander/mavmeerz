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
    <Link to="/login" className="login item nav-item">Login</Link>
    <a
      className="guest-user item nav-item"
      onClick={e => onGuestUserClick(e)}>
        Continue As Guest
    </a>
    <div className="guest-border"></div>

  </header>
)

const onGuestUserClick = (e) => {
  e.preventDefault()
  const guestUserData = {
    name: 'Guest User',
    password: 'guest'
  }
  //signup using guest data
  this.props.signup(guestUserData)
  .then(() => {
    this.context.router.push('/dashboard')
  })
  //automatically upload guestUserTransactions
  .catch(err => console.error(err))
}

export default Nav_Auth
