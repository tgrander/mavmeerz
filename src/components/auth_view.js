import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import KarmoMeter from '../containers/KarmoMeterApp'

import {Link} from 'react-router'

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
        var title = document.getElementById("title");

        document.body.addEventListener(
        "mousemove",
        function(e) {

        var width = window.innerWidth;
        var height = window.innerHeight;

        var x = -(e.clientX - (width / 2)) / (width / 30);

        var y = -(e.clientY - (height / 2)) / (height / 30);

        title.style["text-shadow"] =
          x +
          "px" + " " +
          y +
          "px" +
          " #1C1B1B";
        });
  }

  render() {
        return (
          <div className="auth-view">



            <div className="auth-view-logo">
              <h1 className="logo" id='title'>ZENMO</h1>
              <p className="slogan">Financial Nirvana</p>
            </div>

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
