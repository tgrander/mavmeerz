import React from 'react'
import Expense from './Expense.js'

let ExpenseList = ({expenses}) => {
  //map function that returns and array of Expense Component, each with its
  //own expese object
  var expenseList = expenses.map(exp =>
    <Expense
      key={exp.id}
      expense={exp}
    />
  )

  return (
    <div>
      <ul>
        {expenseList}
      </ul>
    </div>
  )
}

export default ExpenseList;
