import {
  REQUEST_BUDGET,
  RECEIVE_BUDGET,
  UPDATE_BUDGET
} from '../actions/budgetActions'

const INITIAL_STATE = {
  fetchingBudget: false,
  budgetItems: [],
  goalTotal: 0
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
    case UPDATE_BUDGET:
    console.log("State before update: ", state);
      return Object.assign({}, state, {
        budgetItems: action.updatedBudgetItems
      })
      break
    default:
      return state
  }
}
