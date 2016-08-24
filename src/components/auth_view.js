import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import KarmoMeter from '../containers/KarmoMeterApp'

import {Link} from 'react-router'

import * as util from '../util/style_functions'

import '../css/auth-view.css'

class AuthView extends Component {

  static contextTypes = {
        router: PropTypes.object
  }

  componentWillMount() {
        if(this.props.isAuth && window.localStorage.get('zenmoToken')){
          this.context.router.push('/dashboard')
        }
  }

  componentDidMount(){
    util.styleLogo()
    util.particles()
  }

  render() {
        return (
          <div className="auth-view" id="particles-js">

            <h1 className="logo auth-view-logo" id='title'>ZENMO</h1>

            <div className='auth-meter'>
                <KarmoMeter />
            </div>

            <p className="question">What's your financial karma?</p>

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
