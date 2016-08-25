import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash';

import Total from '../components/Total.js'
import GoalTotal from '../components/GoalTotal'
import Chart from '../components/Chart.js'
import KarmoMeter from './KarmoMeterApp'
import '../css/expensesApp.css'

import { updateCategories } from '../actions/expensesActions'

export default class ExpensesApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0
    }
  }

  //explain purpose of this function
  parseCategoriesForChart() {
    let arrByCategory = _.reject(this.props.expenses, expense => {
                          return expense.category == 'Uncategorized';
                        });

    let categorizedTotal = _.sumBy(arrByCategory, expense => expense.amount);

    return  _.chain(arrByCategory)
             .reduce((prev, expense) => {
               if (prev[expense.category]) {
                 prev[expense.category] += expense.amount;
               } else {
                 prev[expense.category]  = expense.amount;
               }
               return prev;
             }, {})
             .map((categoryTotal, category) => {
               return {
                 name: category,
                 y: Math.round((categoryTotal / categorizedTotal) * 100)
               };
             })
             .value();
  }

  render(){
    const expenses      = this.props.expenses
        , uploadSuccess = this.props.uploadSuccess;

    return (
        <div className="rightSection-container">

            <div className="totals">
                <Total/>
            </div>

            <div className="chart-container">
                <Chart
                  data={this.parseCategoriesForChart()}
                />
            </div><br/>

            <div className="karmometer-container">
                <KarmoMeter/>
            </div>

        </div>
    )
  }

}

// ExpensesApp.PropTypes = {
//   // Injected by Redux
//   expenses: PropTypes.array.isRequired,
//   total: PropTypes.number.isRequired,
//   fetchExpenses: PropTypes.func.isRequired
// }

function mapStateToProps(state){
  const { total } = state.expensesReducer
  return {
    total: total
  }
}

export default connect(
  mapStateToProps,
  {
    updateCategories: updateCategories
  }
)(ExpensesApp)
