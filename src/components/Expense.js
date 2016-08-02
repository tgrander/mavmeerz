import React from 'react'

//props
  //expense object
    //{id: 1, date: integer, text: string, amount: integer, category: string}
  //submitCategory() callback
    //dispatches ADD_CATEGORY action
let Expense = ({exp, handleCategorySubmit}) => {
  //component that returns a single expense item
  //each expense item contains a date, description text, amount, and a category

  return (
    <tr>
      <td className="date">{exp.date}</td>
      <td className="description">{exp.description}</td>
      <td className="category">
        <input
          className="category-entry"
          type="text"
          placeholder="Enter Category"
        >
        </input>
      </td>
      <td className="amount">{exp.amount}</td>
    </tr>
  )
}

export default Expense
