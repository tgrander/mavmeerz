import React, { Component, PropTypes } from 'react'
import {fetchCSV,
  uploadRequest,
  uploadSuccess
} from '../actions/uploadActions.js'

var Dropzone = require('react-dropzone');

class DropzoneContainer extends Component {
  onDrop(files){
      //  var req = request.post('/upload');
      uploadRequest();
       files.forEach((file)=> {
         fetchCSV(file);
         uploadSuccess();
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
