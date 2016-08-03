import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { uploadCSV } from '../actions/uploadActions.js'

var Dropzone = require('react-dropzone');

export default class Upload extends Component {
  onDrop(files){
      //  var req = request.post('/upload');
      // uploadRequest();
       files.forEach((file)=> {
         uploadCSV(file);
        //  uploadSuccess();
         console.log('file sent through onDrop', file);
        // req.attach(file.name, file);
       });

      //  req.end(callback);
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

function mapStateToProps(state) {
  console.log('STATE from upload', state);
  const { expenses, isFetching } = state.expensesReducer
  console.log('EXPENSES from upload: ', expenses);
  return {
    expenses: expenses,
    isFetching: isFetching
  }
}

export default connect(
  mapStateToProps,
  { uploadCSV: uploadCSV }
)(Upload)
