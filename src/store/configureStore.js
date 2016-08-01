import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/reducers.js'

const loggerMiddleware = createLogger()
console.log('outside', rootReducer);
export default function configureStore(initialState) {
  console.log('inside', rootReducer);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ReduxPromise,
      loggerMiddleware
    )
  )
}
