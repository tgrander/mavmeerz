import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import createLogger from 'redux-logger'
<<<<<<< e2ba7a4a1e8cd22dbafd50bc573de965fd8dc51a
import rootReducer from '../reducers/reducers.js'
=======
import rootReducer from './reducers'
>>>>>>> added some console.log for deugging purposes

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
