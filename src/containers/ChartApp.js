import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as DonutChart from '../components/Chart.js'
// Load Highcharts
var Highcharts = require('highcharts')
// Load a module
require('highcharts/modules/funnel')(Highcharts);

class App extends React.Component {
	constructor(props) {
    	super(props);

        this.state = {pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]}

    }


	render() {
    	return <DonutChart data = {this.state.pieData}/>
    }
 }

class DonutChart extends React.Component {
	constructor(props) {
    	super(props);
        this.chart = undefined;
    }

  componentDidMount() {
	this.chart = $(React.findDOMNode(this.refs.chart)).highcharts({
            chart: {
                type: 'pie'
            },
            title: 'Browser Market sahre',
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: this.props.data,
                size: '100%',
                innerSize: '85%',
                showInLegend:true,
                dataLabels: {
                    enabled: true
                }
            }]
        });
  }

  componentWillReceiveProps(props) {
  	this.chart.highcharts().series[0].setData(props.data);
  }

  render() {
      return (
        <div ref='chart'>
        </div>
      )
  }
}

// React.render(<App/>,
//   document.getElementById('container')
// );

// export default connect(
//   (state) => {
//     console.log('ChartApp [state] is', state);
//     // const { expenses, isFetching } = state.expensesReducer
//     return {
//       expenses: expenses,
//       isFetching: isFetching
//     }
//   },
//   {
//     uploadCSV: uploadCSV,
//     parsingCSV: parsingCSV
//   }
// )(ChartApp)
