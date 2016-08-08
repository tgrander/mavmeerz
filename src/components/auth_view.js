import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

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
        <h2 className="auth-view-logo">ZENMO</h2>
        <p className="auth-view-slogan">Financial Nirvana</p>
        <br/>
        <p className="auth-view-p">Begin Your Journey to Mindful Budgeting</p>
        <Link to="/signup" className="btn hvr-bounce-to-left">SIGNUP</Link>
        <br/>
        <p className="auth-view-p">Or Continue To Collect Budget Karma</p>
        <Link to="/login" className="btn hvr-bounce-to-left">LOGIN</Link><br/>

        <Link to="/dashboard">Navigate to Main Page (temporary link while routes and tokens are undercon)</Link>
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
