import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Upload from './UploadApp'
import ExpenseList from '../components/ExpenseList.js'
import Total from '../components/Total.js'
import { fetchExpenses, computeTotal, getTotal } from '../actions/expensesActions.js'
import * as DonutChart from '../components/Chart.js'

class ChartApp extends React.Component {
	constructor(props) {
    	super(props);

        this.state = {pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]}

    }

	render() {
    	return <DonutChart data = {this.state.pieData}/>
    }
 }

export default connect(
  (state) => {
    console.log('ChartApp [state] is', state);
    // const { expenses, isFetching } = state.expensesReducer
    return {
      expenses: expenses,
      isFetching: isFetching
    }
  },
  {
    uploadCSV: uploadCSV,
    parsingCSV: parsingCSV
  }
)(ChartApp)
