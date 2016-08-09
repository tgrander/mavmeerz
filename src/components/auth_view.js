import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

import '../css/auth-view.css'

class AuthView extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if(this.props.isAuth){
      this.context.router.push('/dashboard')
    }
  }

  render() {
    return (
      <div className="auth-view">

        <div className="auth-view-logo">
          <h2>ZENMO</h2>
          <p className="auth-view-slogan">Financial Nirvana</p>
        </div>

        <div className='auth-signup'>
          <p className="auth-view-p">Begin Your Journey to Mindful Budgeting</p>
          <Link to="/signup" className="btn hvr-bounce-to-left">SIGNUP</Link>
        </div>

        <div className='auth-login'>
          <p className="auth-view-p">Or Continue To Collect Budget Karma</p>
          <Link to="/login" className="btn hvr-bounce-to-left">LOGIN</Link>
        </div>

      </div>
    )
  }
}

const propTypes = {
  isAuth: PropTypes.bool.isRequired
}

export default connect(
  (state)=>{
    return {
      isAuth: state.isAuth
    }
  })(AuthView)
