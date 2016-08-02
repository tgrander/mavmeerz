import React, { Component, PropTypes } from 'react'
import {uploadCSV} from '../actions/uploadActions.js'

var Dropzone = require('react-dropzone');

class DropzoneContainer extends Component {
  // onDrop (files) {
  //   console.log('Received files: ', files);
  // }

  onDrop(files){
      //  var req = request.post('/upload');
       files.forEach((file)=> {
         uploadCSV(file);
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

export default DropzoneContainer
