//ACTION CREATORS AND CONSTANTS

  //API Requests
    //1. Request expenses
    //2. Receive expenses
    //3. Request failed
    //4. Send CSV file

  //User Interactions
    //1. Upload file (upload button clicked)
    //2. Add category to individual expense

import fetch from 'isomorphic-fetch'

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECIEVE_EXPENSES = 'RECEIVE_EXPENSES';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const UPLOAD_FILE = 'UPLOAD_FILE';
// export const ADD_CATEGORY = 'ADD_CATEGORY';
// export const RECEIVE_UPDATED = 'RECEIVE_UPDATED'

/*
  @returns object with action type
*/
function requestExpenses(){
  return {
    type: REQUEST_EXPENSES
  }
}

/*
  @returns object with action type & array of
  (the return value of expenses needs to be reformatted to look like this:
    expenses: {
      1: {
        ...
      }
    }
  )
*/
function receiveExpenses(json){
  return {
    type: RECEIVE_EXPENSES,
    expenses: json.data.children.map(child => child.data)
  }
}

//thunk action creator
export function fetchExpenses(){
  return function(dispatch){
    //first dispatch:
      //app state is updated to inform that the API call is starting
    dispatch(requestExpenses())
    return fetch('/')
      .then(res => res.json())
      .then(json => dispatch(receiveExpenses(json)))
      .catch(err => console.error("Error sending request to server: ", err))
  }
}
