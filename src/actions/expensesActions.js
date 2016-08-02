import Axios from 'axios'

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';

//ACTION CREATORS FOR FETCHING AND RECEIVING EXPENSES FROM SERVER

/*
Action creator
@returns object with action type
*/

const exampleData = [
  {
    id: 1,
    date: 1470085785371,
    description: "Whole Foods Market",
    amount: 69,
    category: "other"
  },
  {
    id: 2,
    date: 1470085785371,
    description: "Sephora",
    amount: 39,
    category: "other"
  },
  {
    id: 3,
    date: 1470085785371,
    description: "Restaurant in West Village",
    amount: 96,
    category: "other"
  },
  {
    id: 4,
    date: 1470085785371,
    description: "Pizza Shop",
    amount: 5.50,
    category: "other"
  }

]


function fetchExpenses(){
  // const request = Axios.get("/")
  const request = exampleData
  return {
    type: REQUEST_EXPENSES,
    payload: request
  }
}

export default fetchExpenses
