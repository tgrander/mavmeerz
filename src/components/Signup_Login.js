import React, { Component } from 'react'

const Signup_Login = () => (
  <div>
  <div className='signup'>
      <p className="text">Begin Your Journey <br/> to Mindful Budgeting</p>
      <Link to="/signup" className="btn hvr-bounce-to-left text">SIGNUP</Link>
  </div>

  <div className='login'>
      <p className="text">Or Continue To Collect <br/> Budget Karma</p>
      <Link to="/login" className="btn hvr-bounce-to-left text">LOGIN</Link>
  </div>
  </div>
)
