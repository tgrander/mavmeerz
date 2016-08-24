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
    styleLogo()
    particles()
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

/**************************  UTILITY FUNCTIONS  ******************************/

  function particles(){
    particlesJS("particles-js", {"particles":{"number":
    {"value":100,"density":{"enable":true,"value_area":481}},
    "color":{"value":"#ffffff"},"shape":{"type":"star","stroke":
    {"width":0,"color":"#000000"},"polygon":{"nb_sides":4},"image":
    {"src":"img/github.svg","width":100,"height":100}},"opacity":
    {"value":.8,"random":false,"anim":{"enable":false,"speed":
    0.3248308849205381,"opacity_min":0.1,"sync":false}},"size":{"value":3,
    "random":true,"anim":{"enable":false,"speed":2.4362316369040355,
    "size_min":0,"sync":false}},"line_linked":{"enable":true,"distance":150,
    "color":"#ffffff","opacity":0.25252724532232723,"width":1.4204657549380908},
    "move":{"enable":true,"speed":5.206824121731046,"direction":"none",
    "random":false,"straight":false,"out_mode":"out","bounce":false,"attract":
    {"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":
    {"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},
    "onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":
    {"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size"
    :40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,
    "duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true});var count_particles, stats, update; stats = new Stats;
    stats.setMode(0); stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement); count_particles =
    document.querySelector('.js-count-particles'); update = function() {
      stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array) { count_particles.innerText =
          window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(
            update); }; requestAnimationFrame(update);;
  }

  function styleLogo(){
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
