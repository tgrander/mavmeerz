import React, { Component } from 'react'
import { connect } from 'react-redux'
import BudgetTable from '../components/BudgetTable'
import Total from '../components/Total'
import { fetchBudgetItems, updateBudgetItems } from '../actions/budgetActions'

export default class BudgetApp extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchBudgetItems()
  }

  _updateBudget(items){
    this.props.updateBudgetItems(items)
  }

  render(){
    return (
      <div>
        <div className='budget-table'>
          <BudgetTable
            budgetItems={this.props.budgetItems}
            updateBudgetItems={this._updateBudget.bind(this)}
          />
        </div>
        <Total
            total={this.props.total}
        />
      </div>
    )
  }

}

function mapStateToProps(state){
  const { total } = state.expensesReducer
  const { budgetItems, fetchingBudget } = state.budget
  console.log('state from budget app: ', state);
  return {
    total: total,
    budgetItems: budgetItems,
    fetchingBudget: fetchingBudget
  }
}

export default connect(
  mapStateToProps,
  {
    fetchBudgetItems: fetchBudgetItems,
    updateBudgetItems: updateBudgetItems
  }
)(BudgetApp)
