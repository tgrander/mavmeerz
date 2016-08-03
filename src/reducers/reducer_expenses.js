'esversion: 6';

import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES
} from '../actions/expensesActions.js';

const INITIAL_STATE = {expenses: [], isFetching: false}

export default function expenses(state=INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_EXPENSES:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
      break;
    case RECEIVE_EXPENSES:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        expenses: action.payload.data
      })
      break;
    default:
      return state;
  }
}
