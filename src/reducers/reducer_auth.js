import Axios from 'axios'
import { SIGNUP, LOGIN, LOGOUT } from '../actions/authActions'


const INITIAL_STATE = window.localStorage.getItem('zenmoToken') !== null

export default function(state = INITIAL_STATE, action){
  if(action.type === SIGNUP || action.type === LOGIN){
    console.log('action.payload: ', action.payload);
  window.localStorage.setItem('zenmoToken', action.payload.data.token)
  window.localStorage.setItem('username', action.payload.data.username)
    return true
  } else {
    return state
  }
}
