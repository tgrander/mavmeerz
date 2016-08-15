import React, { Component } from 'react'
import { connect } from 'react-redux'
import BudgetTable from '../components/BudgetTable'
import Total from '../components/Total'
import { fetchBudgetItems } from '../actions/budgetActions'

export default class BudgetApp extends Component {

  constructor(props){
    super(props)
<<<<<<< 74c805a690fb25602572628539fb41701214ceab
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

  componentWillMount(){
    this.props.fetchBudgetItems()
  }

  render(){
    return (
      <div>
        <div className='budget-table'>
          <BudgetTable
            budgetItems={this.props.budgetItems}
          />
        </div>
        <Total
            total={this.props.total}
        />
      </div>
    )
  }

}

function getVisibleBudgetItems(budgetItems){
  return budgetItems.filter(item => item.currAmount !== 0)
}

function mapStateToProps(state){
  const { total } = state.expensesReducer
  const { budgetItems, fetchingBudget } = state.budget
  console.log('BUDGET STATE: ', state);
  console.log('BUDGET ITEMS: ', budgetItems);
  return {
    total: total,
    budgetItems: getVisibleBudgetItems(budgetItems),
    fetchingBudget: fetchingBudget
  }
}

export default connect(
  mapStateToProps,
  {
    fetchBudgetItems: fetchBudgetItems
  }
)(BudgetApp)
