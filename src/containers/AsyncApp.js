/*
This is the container component for the entire application. It is rendered
in App.js. All children presentational components of the hierarchy will be
rendered from AsycnApp.

This component is what connects React to Redux; therefore, the only passage that
the presentational components have to the state tree and to Redux is through
AsyncApp. All state changes are both dispatched and received by AsyncApp and
then passed down to all children presentational components. 
*/


import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchExpenses} from '../actions/actions.js'

export default class AsyncApp extends Component {
  constructor(props){
    super(props)
    //function to handle submitting new category for expense
    //function to handle clicking 'uplod CSV' button
  }

  componentDidMount(){
    // dispatch function to fetch all expenses from server
    // @param thunk action creator from ./actions/actions.js
    dispatch(fetchExpenses())
  }


}
