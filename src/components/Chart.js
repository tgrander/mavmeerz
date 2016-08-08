import React from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'

export class DonutChart extends React.Component {
	constructor(props) {
    	super(props);
        this.chart = undefined;
    }

  componentDidMount() {
	this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({
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

export default DonutChart
