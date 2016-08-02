'esversion: 6';

import {
  REQUEST_EXPENSES
} from '../actions/expensesActions.js';

const INITIAL_STATE = {expenses: {}, isFetching: false}

export default function expenses(state=INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_EXPENSES:
      return Object.assign({}, state, {
        expenses: action.payload
      })
      break;
    default:
      return state;
  }
}
