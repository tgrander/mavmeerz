import React, { Component} from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import Expense from './Expense.js'
import Upload from '../containers/UploadApp'

import ExpensesApp from '../containers/ExpensesApp.js'
import { setVisibilityFilter } from '../actions/expensesActions'

import * as util from '../util/ExpenseTableApp'

class ExpenseList extends Component {

  _categorize(category) {
    const selected = this.refs.table.state.selectedRowKeys;
    console.log('selected: ', selected);
    if (selected.length > 0) {
      this.props.updateCategories(selected, category)
        .then(() => this.refs.table.cleanSelected())
    }
  }

  onRowSelect(rowId){
    console.log('selected row: ', rowId);
    console.log('selected expenses: ', this.refs.table.state.selectedRowKeys);
    this.props.onRowSelect(rowId)
  }

  getSelectedRowKeys() {
    //Here is your answer
    console.log(this.refs.table.state.selectedRowKeys)
  }

  render() {

    if (this.props.expenses.length > 0) {
      return (
        <div>
          <div className="transactions">
            <BootstrapTable
                    data={ this.props.expenses }
                    striped={ true }
                    hover={ true }
                    selectRow={ {
                      mode: 'checkbox',
                      clickToSelect: true,
                      bgColor: 'yellow',
                      onSelect: this.onRowSelect.bind(this)
                    } }
                    ref='table'
            >
              <TableHeaderColumn dataField='id' isKey={ true } hidden={ true }>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='date' dataFormat={ util.dateFormatter }>Date</TableHeaderColumn>
              <TableHeaderColumn dataField='description' editable={ { type: 'textarea' } }>Description</TableHeaderColumn>
              <TableHeaderColumn dataField='category' editable={ { type: 'dropdown'} }>Category</TableHeaderColumn>
              <TableHeaderColumn dataField='amount' editable={ { type: 'integer', options: { values: 'Y:N' } } }>Amount</TableHeaderColumn>

            </BootstrapTable>
          </div>
        </div>
      )

    } else {
      return (
        <div className='no-expenses'>
          <p>You have no expenses yet! Upload files below to get started.</p><br/>
          <Upload/><br/>
        </div>
      )
    }


  }

}

export default ExpenseList;
