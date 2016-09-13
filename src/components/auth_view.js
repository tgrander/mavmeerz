import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

import Nav_Auth from './Nav_Auth'

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
    util.styleLogo("rgba(255,255,255, 0.6)")
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

    .catch(err => console.error(err))
  }

  render() {
        return (
          <div>
            <Nav_Auth/>
            <main className="auth-view" role='main' class='main-content'>
              <div className='inner above-fold'>

                  <video id="frontpage-video" autoPlay loop>
                    <source src="http://d27shkkua6xyjc.cloudfront.net/videos/maaemo-film-2.mp4?mtime=20141113185431" type="video/mp4"/>
                    <source src="http://d27shkkua6xyjc.cloudfront.net/videos/maaemo-film-2.ogv?mtime=20141113185421" type="video/ogg"/>
                  </video>

                  <div className="logo-and-phrase">
                    <h1 className="logo" id='title'>ZENMO</h1>
                    <p className="phrase">Find Your Path To Financial Nirvana</p>
                  </div>

              </div>
            </main>
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
//   <a
//     className="btn guest-user-link"
//     onClick={e => this._onGuestUserClick(e)}
//   >Continue As Guest</a>
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
