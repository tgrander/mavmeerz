import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes'

import rootReducer from './reducers/index'

import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  ReduxPromise
)(createStore);
const store = createStoreWithMiddleware(rootReducer)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
