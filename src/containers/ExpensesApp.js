/*
This is the container component for the entire application. It is rendered
in App.js. All children presentational components of the hierarchy will be
rendered from ExpensesApp.

This component is what connects React to Redux; therefore, the only passage that
the presentational components have to the state tree and to Redux is through
AsyncApp. All state changes are both dispatched and received by AsyncApp and
then passed down to all children presentational components.
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ExpenseList from '../components/ExpenseList.js'
import Total from '../components/Total.js'

import { fetchExpenses, updateCategories } from '../actions/expensesActions.js'

export default class ExpensesApp extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchExpenses()
  }

  render(){
    return (
      <div>
        <div className="expense-list-container">

          <ExpenseList
            expenses={this.props.expenses}
            updateCategories={this.props.updateCategories.bind(this)}
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
  fetchExpenses: PropTypes.func.isRequired
}

/*
function that describes how to transform the current Redux store state into the
props you want to pass to a child presentational component you are wrapping
  @param = state object
  @return = object of transformed store state
*/
function mapStateToProps(state){
  const { expenses, isFetching, total } = state.expensesReducer
<<<<<<< dc1471ef6a2726b8d6e35d96635ccae5ca2761d4
  console.log('EXPENSES: ', expenses);
=======
  console.log('mapStateToProps expenses are: ', expenses);
>>>>>>> [feat] working on getting chart to render
  return {
    expenses: expenses,
    isFetching: isFetching,
    total: total
  }
}

//function that connects React component to Redux store
export default connect(
  mapStateToProps,
  {
    fetchExpenses: fetchExpenses,
    updateCategories: updateCategories
  }
)(ExpensesApp)
