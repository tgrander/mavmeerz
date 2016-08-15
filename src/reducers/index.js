import { combineReducers } from 'redux'

import expensesReducer from './reducer_expenses'
import authReducer from './reducer_auth'
import budgetReducer from './reducer_budget'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  expensesReducer,
  budget: budgetReducer,
  isAuth: authReducer,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
