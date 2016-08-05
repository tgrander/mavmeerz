import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/reducers.js'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      ReduxPromise
    )
  )
}
