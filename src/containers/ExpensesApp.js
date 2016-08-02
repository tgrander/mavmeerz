/*
This is the container component for the entire application. It is rendered
in App.js. All children presentational components of the hierarchy will be
rendered from AsycnApp.

This component is what connects React to Redux; therefore, the only passage that
the presentational components have to the state tree and to Redux is through
AsyncApp. All state changes are both dispatched and received by AsyncApp and
then passed down to all children presentational components.
*/

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchExpenses, uploadClick} from '../actions/expensesActions.js'
import ExpenseList from '../components/ExpenseList.js'
import Total from '../components/Total.js'

export default class ExpensesApp extends Component {
  constructor(props){
    super(props)
    //function to handle submitting new category for expense
    //function to handle clicking 'uplod CSV' button
  }

  componentWillMount(){

  }
  componentDidMount(){
    // dispatch function to fetch all expenses from server
    // @param thunk action creator fucntion from ./actions/expensesActions.js

  }
  componentWillReceiveProps(nextProps){
    /*
    when component receives new props from store as a result of an update,
    the component should dispatch fetchExpenses() again
    */

    // dispatch(fetchExpenses())
  }

  //function to handle when a user click on the 'upload' button
  handleUploadClick(e){
    e.preventDefault()
    //launches modal to upload file

  }

  /*
  function to calculate total from expenses object
  @param = expenses object from state
  @return = integer
  */
  _getTotal(expensesObj){
    let total = 0
    for (var id in expensesObj){
      let expense = expensesObj[id]
      total += expense.amount
    }
    return total
  }
  //function that renders all child components
  render(){
    return (
      <div>
        <p>Hello World!!!</p>
      </div>
    )
  }
}

ExpensesApp.PropTypes = {
  // Injected by Redux
  expenses: PropTypes.array.isRequired
}

/*
function that describes how to transform the current Redux store state into the
props you want to pass to a child presentational component you are wrapping
  @param = state object
  @return = object of transformed store state
*/
function mapStateToProps(state){
  console.log('STATE: ', state);
  return {
    expenses: state.expenses,
    total: this._getTotal(state.expenses)
  }
}

//function that connects React component to Redux store
export default connect(
  mapStateToProps
)(ExpensesApp)
