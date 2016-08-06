'esversion: 6'

const mocha = require('mocha');
import configureMockStore from 'redux-mock-store'
// const configureMockStore = require ('redux-mock-store');
import thunk from 'redux-thunk'
// const thunk = require ('redux-thunk');
import * as actions from '../../../src/actions/expensesActions';
// const actions = require('../../../src/actions/expensesActions');
// const expect = require('expect');
import expect from 'expect';
import nock from 'nock'
// const nock = require('nock');


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates UPLOAD_SUCCESS when fetching upload has been done', () => {
    nock('http://localhost:8080')
    .post('/v1/api/expenses')
       .reply(201, {
         ok: true
       });

    const expectedActions = [
      { type: types.UPLOAD_REQUEST },
      { type: types.UPLOAD_SUCCESS,
         ok: true,
       }
     ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.uploadCSV())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
