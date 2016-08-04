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
        <h2 className="auth-view-logo"> className="heading">ZENMO</h2>
        <p className="auth-view-slogan">Attain Financial Nirvana</p>
        <br/><br/>
        <p className="auth-view-p">Get Started On Your Journey to Mindful Budgeting</p>
        <Link to="/signup" className="btn hvr-bounce-to-left">SIGNUP</Link>
        <br/>
        <p className="auth-view-p">Or Continue To Collect Budget Karma</p>
        <Link to="/login" className="btn hvr-bounce-to-left">LOGIN/</Link>
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
