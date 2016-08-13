import React, { Component } from 'react'
import { connect } from 'react-redux'
import BudgetTable from '../components/BudgetTable'
import Total from '../components/Total'
import '../css/BudgetTable.css'

export default class BudgetApp extends Component {

  constructor(props){
    super(props)
    console.log('EXPENSES YAS:', this.props.expenses );
  }

  _categoryTotals(expenses){
    return expenses.reduce((amountsBySubCategory, expense) => {
      const category = expense.category,
            amount = expense.amount

      // let subCategoryAdded = amountsBySubCategory[category]

      amountsBySubCategory[category] ?
        amountsBySubCategory[category] += amount :
        amountsBySubCategory[category] = amount;

      return amountsBySubCategory
    }, {})
  }

  render(){
    return (
      <div>
        <div className='budget-table'>
          <BudgetTable/>
        </div>
        <Total
            total={this.props.total}
        />
      </div>
    )
  }

}

export default connect(
  (state) => {
    const { expenses, total } = state.expensesReducer
    return {
      expenses: expenses,
      total: total
    }
  }
)(BudgetApp)
