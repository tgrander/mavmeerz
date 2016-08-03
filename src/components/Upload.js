import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetchCSV,
  uploadRequest,
  uploadSuccess
} from '../actions/uploadActions.js'

var Dropzone = require('react-dropzone');

export default class UploadApp extends Component {
  onDrop(files){
      //  var req = request.post('/upload');
      // uploadRequest();
       files.forEach((file)=> {
         fetchCSV(file);
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
  const { expenses, isUploading } = state.uploadReducer
  console.log('EXPENSES from upload: ', expenses);
  return {
    expenses: expenses,
    isUploading: isUploading
  }
}

export default connect(
  mapStateToProps,
  { fetchCSV: fetchCSV }
)(UploadApp)
