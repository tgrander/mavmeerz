import Axios from 'axios'

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES'
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES'

//ACTION CREATORS FOR FETCHING AND RECEIVING EXPENSES FROM SERVER

/*
Action creator
Notifies state that expenses have been requested -> signal 'load feature'
*/
function requestExpenses(){
  return {
    type: REQUEST_EXPENSES
  }
}

/*
Async Action creator
Create async flow that notifies state of different stages of fetching expenses
as the expenses are requested and received
*/
export function fetchExpenses(){
  //first thing is to trigger 'isFetching' to true in state
  requestExpenses()
  /*
  Axios + redux-promise http request to server for expenses
    -> When redux-promise is used (it is imported in configureStore.js),
    .then / .catch are automatically taken care of. Becasue the return object
    includes 'payload' property with a value of the Axios request, redux-promise
    knows to wait to return object until the status of the Axios request changes
    from 'pending' to 'success'
  */
  const request = Axios.get("/v1/api/expenses/")
  //changes 'isFetching' to false upon success of Axios request
  //and populates state 'expenses' with resonse data from server
  return {
    type: RECEIVE_EXPENSES,
    isFetching: false,
    payload: request
  }
}
