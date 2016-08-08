import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import Expense from './Expense.js'
import Upload from '../containers/UploadApp'
import '../css/styles.css'

let ExpenseList = ({expenses}) => {

  const categorize = () => {
    /*
    takes selected rows as input
    sends PUT request to server with:
      1. IDs of all selected transactions
      2. category
    */
  }


  if (expenses.length>0) {
    return (
      <div className="transactions">
        <h3>TRANSACTIONS</h3>
        <BootstrapTable
                data={ expenses }
                striped={ true }
                hover={ true }
                insertRow={ true }
                deleteRow={ true }
                selectRow={{mode: 'checkbox', clickToSelect: true, bgColor: 'yellow'}}

        >
          <TableHeaderColumn dataField='id' isKey={ true } hidden={ true }>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='date' editable={ { type: 'textarea' } }>Date</TableHeaderColumn>
          <TableHeaderColumn dataField='description' editable={ { type: 'textarea' } }>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='category' editable={ { type: 'dropdown'} }>Category</TableHeaderColumn>
          <TableHeaderColumn dataField='amount' editable={ { type: 'integer', options: { values: 'Y:N' } } }>Amount</TableHeaderColumn>

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
