import { combineReducers } from 'redux'
import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  REQUEST_FAIL
} from '../actions/actions.js'

function expenses(state={
  expenses: {},
  isFetching: false
}, action){
  switch (action.type) {
    case REQUEST_EXPENSES:
      return Object.assign({}, state, {
        isFetching: true
      })
      break;

    case RECEIVE_EXPENSES:
      return Object.assign({}, state, {
        isFetching: false,
        expenses: action.expenses
      })
      break;

    default:
      return state
  }
}

const rootReducer = combineReducers({
  expenses
})

export default rootReducer
