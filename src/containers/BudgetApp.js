import React, { Component } from 'react'
import { connect } from 'react-redux'
import BudgetTable from '../components/BudgetTable'

export default class BudgetApp extends Component {

  constructor(props){
    super(props)
    console.log('EXPENSES YAS:', this.props.expenses );
  }

  render(){
    return (
      <div>
        <BudgetTable/>
      </div>
    )
  }

}

export default connect(
  (state) => {
    const { expenses } = state.expensesReducer
    return {
      expenses: expenses
    }
  }
)(BudgetApp)
