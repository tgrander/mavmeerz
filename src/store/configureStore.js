import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/reducers.js'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ReduxPromise,
      loggerMiddleware
    )
  )
}
