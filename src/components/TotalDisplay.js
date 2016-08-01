'esversion: 6';

import React, { Component, PropTypes } from 'react';
import ExpenseList from './ExpenseList';

export default class Total extends Component {
  render() {
    const {expenses, total} = this.props

    const hasExpenses = expenses.length > 0
    const nodes = !hasExpenses ?
      <em> You have no expenses! Cray. </em> :
      expenses.map(expense =>
        <expense
          amount={expense.amount} />
      )

    return (
      <div>
        <h3>Total Expenditure:</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
      </div>
    )
  }
}

Total.propTypes = {
  total: PropTypes.string.isRequired
}
