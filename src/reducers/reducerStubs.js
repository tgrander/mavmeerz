/*
This file contains mock reducers that will create example data and should only
be used for testing purposes.
*/

import { combineReducers } from 'redux'
import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  REQUEST_FAIL
} from '../actions/actions.js'

const exampleData = {
  1: {
    id: 1,
    date: 1470085785371,
    description: "Whole Foods Market",
    amount: 69,
    category: "other"
  },
  2: {
    id: 2,
    date: 1470085785371,
    description: "Sephora",
    amount: 39,
    category: "other"
  },
  3: {
    id: 3,
    date: 1470085785371,
    description: "Restaurant in West Village",
    amount: 96,
    category: "other"
  },
  4: {
    id: 4,
    date: 1470085785371,
    description: "Pizza Shop",
    amount: 5.50,
    category: "other"
  }
}

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

const rootReducerTest = combineReducers({
  expenses
})

export default rootReducerTest
