import React, { Component} from 'react'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Upload from '../containers/UploadApp'
import Dropdown from '../components/Dropdown'
import DatePicker from '../components/DatePicker'
import ExpenseList from '../components/ExpenseList.js'
import Spin from '../components/Spin'



import { setVisibilityFilter } from '../actions/expensesActions'

import {
  fetchExpenses,
  toggleFetched,
  setVisibilityFilter
} from '../actions/expensesActions'


class ExpenseTableApp extends Component {

      componentWillMount(){
        if (!this.props.initialFetchOccurred) {
          this.props.fetchExpenses()
          this.props.toggleFetched()
        }
      }

      render(){
        return (
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
                    updateAccounts={this.props.updateAccounts.bind(this)}
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
    visibilityFilter
  } = state.expensesReducer

  return {
    expenses: util.getVisibleExpenses(expenses, visibilityFilter, startDate, endDate),
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
    setVisibilityFilter: setVisibilityFilter
  }
)(ExpenseTableApp)