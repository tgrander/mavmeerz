import React, { Component, PropTypes } from 'react'
import ExpenseList from './ExpenseListItem.js'

export default class Chart extends Component {
  render() {
    const { category, total } = this.props

    const chart = categories.map(category =>
      <ExpenseListItem
        category={category.category}
        total = {category.amount} />
    )

    return (
      <div>
        <h3>Your Chart</h3>
        <div> {chart} </div>
      </div>
    )
  }
}

Chart.PropTypes {
  categories: PropTypes.array,
  total: PropTypes.string
}
