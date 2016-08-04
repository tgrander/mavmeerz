import { combineReducers } from 'redux'

import expensesReducer from './reducer_expenses'

const rootReducer = combineReducers({
  expensesReducer
})

export default rootReducer
