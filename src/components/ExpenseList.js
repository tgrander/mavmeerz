import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import Expense from './Expense.js'
import Upload from '../containers/UploadApp'

let ExpenseList = ({expenses}) => {
  console.log('Expenselist expenses are present: ', expenses.length>0);
  if (expenses.length>0) {
    //map function that returns and array of Expense Component, each with its
    //own expese object
    // let expenseList = expenses.map(exp =>
    //   <Expense
    //     key={exp.id}
    //     exp={exp}
    //   />
    // )

    return (
      <div className="transactions">
        <h3>TRANSACTIONS</h3>
        <BootstrapTable data={ expenses } insertRow={ true } striped={ true } hover={ true } deleteRow={ true } columnFilter={ true } exportCSV={ true }
          selectRow={{mode: 'checkbox', clickToSelect: true}}
        >
          <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='date' editable={ { type: 'textarea' } }>Date</TableHeaderColumn>
          <TableHeaderColumn dataField='description' editable={ { type: 'textarea' } }>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='category' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Category</TableHeaderColumn>
          <TableHeaderColumn dataField='amount' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Amount</TableHeaderColumn>
        
        </BootstrapTable>
      </div>
    )

  } else {
    return (
      <div>
        <p>You have no expenses yet! Upload files below to get started.</p><br/>
        <Upload/><br/>
        <p>Or add your expenses manually.</p>
      </div>
    )
  }

}

export default ExpenseList;
