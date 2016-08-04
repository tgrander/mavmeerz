import React from 'react'
import Expense from './Expense.js'

let ExpenseList = ({expenses}) => {
  if (expenses) {
    //map function that returns and array of Expense Component, each with its
    //own expese object
    let expenseList = expenses.map(exp =>
      <Expense
        key={exp.id}
        exp={exp}
      />
    )

    return (
      <div>
        <table className="transactions" cellpadding="0" cellspacing="0">
          <tbody>
            {expenseList}
          </tbody>
        </table>
      </div>

    )
  } else {
    return (
      <p>No transactions at this time</p>
    )
  }

}

export default ExpenseList;
