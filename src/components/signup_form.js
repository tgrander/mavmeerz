import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'
import {signup} from '../actions/authActions'
import UploadApp from '../containers/UploadApp'

class SignupForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(signupData){
    this.props.signup(signupData)
    .then(() => {
      this.context.router.push('/dashboard')
    })
  }

  render() {
    const {fields:{name, email, password}, handleSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <p className="heading">Signup</p>
          <div>
            <input type="text" {...name} placeholder='name' className="biginput"/>
            <div className="err-msg">{name.touched ? name.error : ''}</div>
          </div>

          <div>
            <input type="text" {...email} placeholder='email' className="biginput"/>
            <div className="err-msg">{email.touched ? email.error : ''}</div>
          </div>

          <div>
            <input type="password" {...password} placeholder='password' className="biginput"/>
            <div className="err-msg">{password.touched ? password.error : ''}</div>
          </div>
          <div className="btn-group">
            <button type="submit" className="btn hvr-bounce-to-left">Submit</button>
          </div>
        </form><br/>
        <Link to="/login" className="btn hvr-bounce-to-left">LOGIN</Link><br/>
        <UploadApp/>
      </div>

    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.name) errors.name = 'Please enter your name'
  if(!values.email) errors.email = 'Please enter a valid email'
  if(!values.password) errors.password = 'Please enter a password'
  return errors
}

export default reduxForm({
  form: "SignupForm",
  fields: ['name', 'email', 'password'],
  validate
}, null, {signup} )(SignupForm)
