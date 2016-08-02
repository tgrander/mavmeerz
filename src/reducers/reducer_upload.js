import { UPLOAD_FILE, UPLOAD_CLICK, UPLOAD_SENT } from '../actions/uploadActions'

//initial state for the 'upload' chunk of state
const INITIAL_STATE = {
  //reflects very initial state before an upload is made - will change to true
  //when upload is made
  upload: false,

  //toggled to 'true' as part of async flow to notify state that file has been
  //sent and is currently uploading (good for launching a loading feature)
  isUploading: false
}

export default function(state= INITIAL_STATE, action){
  switch(action.type){
    //unfinished reducer function for CSV file uploads :)
  }
}
