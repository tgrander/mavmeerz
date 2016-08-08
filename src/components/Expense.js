import React from 'react'
import { TableHeaderColumn } from 'react-bootstrap-table';

let Expense = ({exp, handleCategorySubmit}) => {
  //component that returns a single expense item
  //each expense item contains a date, description text, amount, and a category
  let amount;
  if (exp.amount) {
    amount
  }

  return (
    <tr>
      <td className="date">{exp.Date}</td>
      <td className="description">{exp.Description}</td>
      <td className="category">
        <input
          className="category-entry"
          type="text"
          placeholder="Enter Category"spot
        >
        </input>
      </td>
      <td className="amount">{exp.amount}</td>
    </tr>
  )
}

export default Expense
