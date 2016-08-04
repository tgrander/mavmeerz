import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import AuthView from './components/auth_view'
import LoginForm from './components/login_form'
import SignupForm from './components/signup_form'
import Dashboard from './components/dashboard'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AuthView}/>
    <Route path='signup' component={SignupForm}/>
    <Route path='login' component={LoginForm}/>
    <Route path='dashboard' component={Dashboard}/>
  </Route>
)
