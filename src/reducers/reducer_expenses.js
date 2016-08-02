'esversion: 6';

import {
  REQUEST_EXPENSES
} from '../actions/expensesActions.js';

const exampleData = [
  {
    id: 1,
    date: 1470085785371,
    description: "Whole Foods Market",
    amount: 69,
    category: "other"
  },
  {
    id: 2,
    date: 1470085785371,
    description: "Sephora",
    amount: 39,
    category: "other"
  },
  {
    id: 3,
    date: 1470085785371,
    description: "Restaurant in West Village",
    amount: 96,
    category: "other"
  },
  {
    id: 4,
    date: 1470085785371,
    description: "Pizza Shop",
    amount: 5.50,
    category: "other"
  }
]

const INITIAL_STATE = {expenses: [], isFetching: false}

export default function expenses(state=INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_EXPENSES:
      return Object.assign({}, state, {
        expenses: action.payload.data
      })
      break;
    default:
      return state;
  }
}
