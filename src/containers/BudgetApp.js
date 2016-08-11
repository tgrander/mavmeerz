import React, { Component } from 'react'
import BudgetTable from '../components/BudgetTable'

class BudgetApp extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <BudgetTable />
      </div>
    )
  }

}

export default BudgetApp
