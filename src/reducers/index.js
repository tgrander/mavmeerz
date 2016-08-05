import { combineReducers } from 'redux'

import expensesReducer from './reducer_expenses'
import authReducer from './reducer_auth'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  expensesReducer,
  isAuth: authReducer,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
