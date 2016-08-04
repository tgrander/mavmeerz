import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { uploadCSV } from '../actions/uploadActions.js'
var DropZone = require('react-dropzone')

export default class Upload extends Component {
  onDrop(files){
    files.forEach((file) => {
       this.props.uploadCSV(file);
       console.log('file sent through onDrop', file);
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

export default connect(
  (state) => {
    return {
      expenses: state.expensesReducer.expenses,
      isFetching: state.expensesReducer.isFetching
    }
  },
  {
    uploadCSV: uploadCSV
  }
)(Upload)
