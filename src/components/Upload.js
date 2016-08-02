import React, { Component, PropTypes } from 'react'
import {uploadCSV} from '../actions/uploadActions.js'

var Dropzone = require('react-dropzone');

class DropzoneContainer extends Component {
  // onDrop (files) {
  //   console.log('Received files: ', files);
  // }

  onDrop(files){
      //  var req = request.post('/upload');
      console.log('1 Received files: ', files);
       files.forEach((file)=> {
         console.log('2 Received files: ', files);
         uploadCSV(file);
        // req.attach(file.name, file);
       });

      //  req.end(callback);
   }

  render () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div> Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

export default DropzoneContainer
