/*
This is the container component for the entire application. It is rendered
in App.js. All children presentational components of the hierarchy will be
rendered from AsycnApp.

This component is what connects React to Redux; therefore, the only passage that
the presentational components have to the state tree and to Redux is through
AsyncApp. All state changes are both dispatched and received by AsyncApp and
then passed down to all children presentational components.
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ExpenseList from '../components/ExpenseList.js'
import Total from '../components/Total.js'
import Upload from '../components/Upload.js'

import { fetchExpenses } from '../actions/expensesActions.js'
import { uploadCSV } from '../actions/uploadActions.js'

export default class ExpensesApp extends Component {
  constructor(props){
    super(props)
    //function to handle submitting new category for expense
    //function to handle clicking 'uplod CSV' button
  }

  componentWillMount(){
    console.log('componentWillMount', this.props);
    this.props.fetchExpenses()
  }
  componentDidMount(){
    // dispatch function to fetch all expenses from server
    this.props.fetchExpenses()
  }
  componentWillReceiveProps(nextProps){
    /*
    when component receives new props from store as a result of an update,
    the component should dispatch fetchExpenses() again
    */
    console.log('nextProps', nextProps)
    // dispatch(fetchExpenses())
  }

  //function to handle when a user click on the 'upload' button
  // handleUploadClick(e){
  //   e.preventDefault()
  //   //launches modal to upload file
  //   console.log('upload clicked', e);
  //   dispatch(uploadClick())
  //   console.log('upload clicked', e);
  // }

  /*
  function to calculate total from expenses array
  @param = expenses array from state
  @return = integer
  */
  _getTotal(expensesArr){
    total = 0
    for (var i = 0; i < expensesArr.length; i++) {
      let expense = expensesArr[i]
      total += expense.amount
    }
    return total
  }
  //function that renders all child components
  render(){
    return (
      <div>
        <div className="expense-list-container">
          <h3>TRANSACTIONS</h3>
          <ExpenseList
            expenses={this.props.expenses}
          />
        </div>
        <Total
          total={this.props.total}
        />
      </div>
    )
  }
}

ExpensesApp.PropTypes = {
  // Injected by Redux
  expenses: PropTypes.array.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  uploadCSV: PropTypes.func.isRequired
}

/*
function to calculate total from expenses array
@param = expenses array from state
@return = integer
*/
function _getTotal(expensesArr){
  let total = 0
  if (expensesArr) {
    for (var i = 0; i < expensesArr.length; i++) {
      let expense = expensesArr[i]
      total += expense.amount
    }
  }
  return total
}

/*
function that describes how to transform the current Redux store state into the
props you want to pass to a child presentational component you are wrapping
  @param = state object
  @return = object of transformed store state
*/
function mapStateToProps(state){
  console.log('STATE: ', state);
  const { expenses, isFetching } = state.expensesReducer
  console.log('EXPENSES: ', expenses);
  return {
    expenses: expenses,
    isFetching: isFetching,
    total: _getTotal(expenses)
  }
}

//function that connects React component to Redux store
export default connect(
  mapStateToProps,
  {
    fetchExpenses: fetchExpenses,
    uploadCSV: uploadCSV
  }
)(ExpensesApp)
