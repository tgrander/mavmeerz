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
export const ADD_CATEGORY = 'ADD_CATEGORY';

export function addCategory(id, category){
  return {
    type: ADD_CATEGORY,
    id,
    category
  }
}

function requestExpenses(){
  return {
    type: REQUEST_EXPENSES
  }
}

function receiveExpenses(json){
  return {
    type: RECIEVE_EXPENSES,
    expenses: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchExpenses(){
  return function(dispatch){
    dispatch(requestExpenses())
    return fetch()
  }
}
