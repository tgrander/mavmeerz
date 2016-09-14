import React, { Component} from 'react'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Upload from '../containers/UploadApp'
import Dropdown from '../components/Dropdown'
import DatePicker from '../components/DatePicker'
import ExpenseList from '../components/ExpenseList.js'
import Spin from '../components/Spin'

import { getVisibleExpenses } from '../util/ExpenseTableApp'

import {
  fetchExpenses,
  toggleFetched,
  setVisibilityFilter,
  updateCategories,
  expenseSelected
} from '../actions/expensesActions'


class ExpensesApp extends Component {

      componentWillMount(){
        //FETCH EXPENSES
        if (!this.props.initialFetchOccurred) {
          // this.props.fetchExpenses()
          // this.props.toggleFetched()
        }
      }

      render(){
          const expenses      = this.props.expenses
              , uploadSuccess = this.props.uploadSuccess;

          if (this.props.isFetching) {
            return (
              <Spin/>
            )
          } else {
            return (
                <div className="expense-list-container">
                  <ExpenseList
                    uploadSuccess={uploadSuccess}
                    dates={
                      {
                        startDate:this.props.startDate,
                        endDate: this.props.endDate
                      }
                    }
                    expenses={expenses}
                    updateCategories={this.props.updateCategories.bind(this)}
                    expenseSelected={expenseSelected}
                  />
                </div>
            )
          }
      }
}

function mapStateToProps(state){
  const {
    expenses,
    uploadSuccess,
    isFetching,
    startDate,
    endDate,
    initialFetchOccurred,
    visibilityFilter,

  } = state.expensesReducer

  return {
    expenses: getVisibleExpenses(expenses, visibilityFilter, startDate, endDate),
    uploadSuccess: uploadSuccess,
    isFetching: isFetching,
    startDate: startDate,
    endDate: endDate,
    initialFetchOccurred: initialFetchOccurred
  }
}

export default connect(
  mapStateToProps,
  {
    fetchExpenses: fetchExpenses,
    toggleFetched: toggleFetched,
    setVisibilityFilter: setVisibilityFilter,
    updateCategories: updateCategories,
    expenseSelected: expenseSelected
  }
)(ExpensesApp)
