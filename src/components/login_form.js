import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import { Link } from 'react-router'
import { login } from '../actions/authActions'

import '../css/login.css'
import '../css/particles.css'

class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    window.localStorage.removeItem('zenmoToken');
  }

  onSubmit(loginData){
    this.props.login(loginData)
    .then((response) => {
      if(response.payload.status < 300){
        this.context.router.push('/dashboard');
      }
    })
  }

  render() {
    const {fields:{email, password}, handleSubmit} = this.props;
    return (

      <div className="login-page">

        <div id="login-form">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <p className="heading">LOGIN</p>
              <div>
                <input type="text" {...email} placeholder='username' className="biginput"/>
                <div className="err-msg">{email.touched ? email.error : ''}</div>
              </div>
              <div>
                <input type="password" {...password} placeholder='password' className="biginput"/>
                <div className="err-msg">{password.touched ? password.error : ''}</div>
              </div>
            <div className="btn-group">
              <button type="submit" className="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        <div className="auth-redirect">
          <p>Already have an account?</p>
          <Link to="/signup" className="redirect-link">SIGNUP</Link>
        </div>

      </div>

    )
  }
}

function validate(values) {
  const errors = {};
  if(!values.email) errors.email = 'Please enter a valid email';
  if(!values.password) errors.password = 'Please enter a password';
  return errors;
}

export default reduxForm({
  form: "LoginForm",
  fields: ['email', 'password'],
  validate
}, null, {login} )(LoginForm)
