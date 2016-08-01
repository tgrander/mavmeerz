/*
ACTIONS AND ACTION CREATORS

API Requests
  1. Request expenses
  2. Receive expenses
  3. Request failed
  4. Send CSV file
  5. Add category

User Interactions
  1. Upload file (upload button clicked)
  2. Add category to individual expense
    -When a category is added, must notify chunk of state that handles chart so
    that it can be updated to reflect categorization properly
  3. Filter expenses by date
*/

import fetch from 'isomorphic-fetch'

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECIEVE_EXPENSES = 'RECEIVE_EXPENSES';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const UPLOAD_FILE = 'UPLOAD_FILE';
/*
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE'
*/

//******************************************************************************
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

/*
@returns object with action type & array of
The return value of expenses needs to be reformatted to look like this:
  expenses: {
    1: {
      ...
    }
  }
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
//******************************************************************************
/*
ACTION CREATORS FOR UPLOADING A CSV FILE TO SERVER

UX for uploading a CSV file
  1. click on 'upload' button
    -action: UPLOAD_CLICK
    -response from state: show UI for selecting a file
  2. select file from computer and click 'choose'
    -action: UPLOAD_SENT
    -response from state: hide upload UI and show loading feature
  3. CSV is parsed and sent to backend
  4. Expenses are received from server
    -action: RECEIVE_EXPENSES
    -reponse from state: hide loading feature, display updated expenses
*/

export const uploadActions = {
  UPLOAD_CLICK,
  UPLOAD_SENT
  // RECEIVE_EXPENSES --> use same action as 'creating and receiving expenses'
}
//action creator function to notify state that CSV file has been sent to server
function uploadClick(){
  return {
    type: uploadActions.UPLOAD_CLICK
  }
}
/*
action creator function to notify state that CSV was successfully stored in DB
and newly expenses have been received
*/
function uploadSent(){
  return {
    type: uploadActions.UPLOAD_SENT
  }
}
export function uploadCSV(){
  return function(dispatch){
    dispatch(uploadSent())
    
  }
}
