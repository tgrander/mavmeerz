/*
UploadApp App container (smart component) in charge of connecting React to the
store/state and transforming the state in a way that can be used by the
UploadAppButton component.
  -Renders UploadAppButton
*/
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import parse from 'csv-parse'
// import papa from '../../papaparse-4.1.2'
import Papa from 'babyparse'
import { uploadCSV, parsingCSV } from '../actions/expensesActions.js'
const Dropzone = require('react-dropzone');

export default class UploadApp extends Component {

  constructor(props){
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(files){
    var that = this;
    files.forEach((file) => {
      console.log('here props', that.props)
      that.props.parsingCSV()
       parseCSV(file)
       .then(function(result) {
         that.props.uploadCSV(result.data)
         console.log('file sent through onDrop', result);
       })

    });
  }

  render () {
    return (
      <div>
        <Dropzone className="dropzone" onDrop={this.onDrop}>
          <div> Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

UploadApp.PropTypes = {
  uploadCSV: PropTypes.func.isRequired
}

function parseCSV(file) {


  return new Promise(function(resolve, reject) {
    console.log('parsing file', file);
    Papa.parse(file.preview, {
      header: true,
      download: true,
      complete: function(results) {
        if (results.errors.length === 0) {
          console.log('papa results', results)
          resolve(results);
        } else {
          reject(errors);
        }
      }
    })
  });
}

export default connect(
  (state) => {
    const { expenses, isFetching } = state.expensesReducer
    return {
      expenses: expenses,
      isFetching: isFetching
    }
  },
  {
    uploadCSV: uploadCSV,
    parsingCSV: parsingCSV
  }
)(UploadApp)
