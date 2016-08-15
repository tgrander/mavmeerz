import {
  REQUEST_BUDGET,
  RECEIVE_BUDGET
} from '../actions/budgetActions'

const INITIAL_STATE = {
  fetchingBudget: false,
  budgetItems: []
}

export default function budget(state=INITIAL_STATE, action){
  switch (action.type) {
    case REQUEST_BUDGET:
      return Object.assign({}, state, {
        fetchingBudget: true
      })
      break;
    case RECEIVE_BUDGET:
      return Object.assign({}, state, {
        budgetItems: action.budgetItems
      })
      break
    default:
      return state
  }
}
