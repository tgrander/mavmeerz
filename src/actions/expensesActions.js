import Axios from 'axios'

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';

//ACTION CREATORS FOR FETCHING AND RECEIVING EXPENSES FROM SERVER

/*
Action creator
@returns object with action type
*/

function requestExpenses(){
  return {
    type: REQUEST_EXPENSES
  }
}
function receiveExpenses(){
  return {
    type: RECEIVE_EXPENSES
  }
}
export function fetchExpenses(){
  const request = Axios.get("/v1/api/expenses/")
  .then(res => )
  .catch(err => console.error(err))

  return {
    type: REQUEST_EXPENSES,
    payload: request
  }
}
