import { combineReducers } from 'redux'

import expensesReducer from './reducer_expenses'
import uploadReducer from './reducer_upload'

const rootReducer = combineReducers({
  expenses: expensesReducer,
  upload: uploadReducer
})

export default rootReducer