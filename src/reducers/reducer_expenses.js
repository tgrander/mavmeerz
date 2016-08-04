import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE
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
        expenses: action.expenses
      })
    case UPLOAD_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
      break;
    case UPLOAD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        expenses: state.expenses.concat(action.expenses)
      })
      break;
    default:
      return state;
  }
}
