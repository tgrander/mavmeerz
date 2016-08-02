import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  REQUEST_FAIL
} from '../actions/expensesActions.js'

export default function expenses(state={
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
