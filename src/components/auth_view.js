import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

import Nav_Auth from './Nav_Auth'
import MainContent from './MainContent'

import * as util from '../util/style_functions'
import { signup } from '../actions/authActions'

import {Link} from 'react-router'

import '../css/auth-view.css'
import '../css/navbar.css'

class AuthView extends Component {

  static contextTypes = {
        router: PropTypes.object
  }

  componentWillMount() {
        if(this.props.isAuth && window.localStorage.getItem('zenmoToken')){
          this.context.router.push('/dashboard')
        }
  }

  componentDidMount(){
    util.styleLogo("rgba(255,255,255, 0.8)")
  }

  render() {
        return (
          <div>
            <Nav_Auth/>
            {this.props.children}
          </div>
        )
      }
}

function mapStateToProps(state){
  return {
    isAuth: state.isAuth
  }
}

export default connect(
  mapStateToProps,
  {signup: signup}
)(AuthView)



// <div>

// </div>

// <div className='signup'>
//     <p className="text">Begin Your Journey <br/> to Mindful Budgeting</p>
//     <Link to="/signup" className="btn hvr-bounce-to-left text">SIGNUP</Link>
// </div>
//
// <div className='login'>
//     <p className="text">Or Continue To Collect <br/> Budget Karma</p>
//     <Link to="/login" className="btn hvr-bounce-to-left text">LOGIN</Link>
// </div>
