import React, { Component, PropTypes } from 'react'
var Dropzone = require('react-dropzone');

class DropzoneContainer extends Component {
  onDrop (files) {
    console.log('Received files: ', files);
  }

  render () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div> Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }
}

export default DropzoneContainer
