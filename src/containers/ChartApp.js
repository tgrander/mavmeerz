import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import * as DonutChart from '../components/Chart.js'
var Highcharts = require('highcharts');
import DonutChart from '../components/Chart.js'

export class ChartApp extends React.Component {
	constructor(props) {
    	super(props);

        this.state = {pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]}

    }


	render() {
    	return <DonutChart data = {this.state.pieData}/>
    }
 }

 export default ChartApp
