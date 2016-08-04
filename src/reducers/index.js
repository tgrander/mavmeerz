import { combineReducers } from 'redux'

import expensesReducer from './reducer_expenses'
import authReducer from './reducer_auth'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  expensesReducer,
  isAuth: authReducer,
  routing: routerReducer
})

export default rootReducer
