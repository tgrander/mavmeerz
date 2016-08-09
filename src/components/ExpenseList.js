import React, { Component} from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import Expense from './Expense.js'
import Upload from '../containers/UploadApp'
import Dropdown from '../components/Dropdown'
import Total from './Total.js'
import '../css/styles.css'
import ChartApp from '../containers/ChartApp.js'
import ExpensesApp from '../containers/ExpensesApp.js'

class ExpenseList extends Component {
  constructor(props){
    super(props)

  }

  _categorize(category){
    const selected = this.refs.table.state.selectedRowKeys
    console.log('Category from _categorize function: ', category);
    if (selected.length > 1) {
      this.props.updateCategories(selected, category)
    }
  }

  render(){
    if (this.props.expenses.length>0) {
      return (
        <div>
          <div className="transactions">
            <h3>TRANSACTIONS</h3>
            <Dropdown
                categorize={this._categorize.bind(this)}
            />
            <BootstrapTable
                    data={ this.props.expenses }
                    striped={ true }
                    hover={ true }
                    selectRow={{mode: 'checkbox', clickToSelect: true, bgColor: 'yellow'}}
                    ref='table'

            >
              <TableHeaderColumn dataField='id' isKey={ true } hidden={ true }>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='date' editable={ { type: 'textarea' } }>Date</TableHeaderColumn>
              <TableHeaderColumn dataField='description' editable={ { type: 'textarea' } }>Description</TableHeaderColumn>
              <TableHeaderColumn dataField='category' editable={ { type: 'dropdown'} }>Category</TableHeaderColumn>
              <TableHeaderColumn dataField='amount' editable={ { type: 'integer', options: { values: 'Y:N' } } }>Amount</TableHeaderColumn>

            </BootstrapTable>
          </div>
          <Total
          total={this.props.total}
          />
          <div>
            Chart goes here:
            <ChartApp/>
          </div>
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

}

export default ExpenseList;
