import React, { Component } from 'react'
import { connect } from 'react-redux'
import BudgetTable from '../components/BudgetTable'
import Total from '../components/Total'
import '../css/BudgetTable.css'

export default class BudgetApp extends Component {

  constructor(props){
    super(props)
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
    const { total } = state.expensesReducer
    return {
      total: total
    }
  }
)(BudgetApp)
