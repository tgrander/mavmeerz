import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

import * as util from '../util/style_functions'

import '../css/auth-view.css'

import { signup } from '../actions/authActions'

class AuthView extends Component {

  constructor(props){
    super(props)
    console.log('signup function: ', this.props.signup);
  }

  static contextTypes = {
        router: PropTypes.object
  }

  componentWillMount() {
        if(this.props.isAuth && window.localStorage.getItem('zenmoToken')){
          this.context.router.push('/dashboard')
        }
  }

  componentDidMount(){
    util.styleLogo("#1C1B1B")
    util.particles()
  }

  _onGuestUserClick(e){
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
    .then()
    .catch(err => console.error(err))
  }

  render() {
        return (
          <div className="auth-view" id="particles-js">

            <h1 className="logo auth-view-logo" id='title'>ZENMO</h1>

            <p className="question">Find Your Path To Financial Nirvana</p>

            <div className='signup'>
                <p className="text">Begin Your Journey <br/> to Mindful Budgeting</p>
                <Link to="/signup" className="btn hvr-bounce-to-left text">SIGNUP</Link>
            </div>

            <div className='login'>
                <p className="text">Or Continue To Collect <br/> Budget Karma</p>
                <Link to="/login" className="btn hvr-bounce-to-left text">LOGIN</Link>
            </div>

            <div>
              <a
                className="btn guest-user-link"
                onClick={e => this._onGuestUserClick(e)}
              >Continue As Guest</a>

            </div>

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
