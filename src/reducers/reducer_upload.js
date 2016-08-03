import {
  // UPLOAD_FILE,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE }
  from '../actions/uploadActions.js'

//initial state for the 'upload' chunk of state
const INITIAL_STATE = {
  //reflects very initial state before an upload is made - will change to true
  //when upload is made
  // upload: false,
  expenses: [],
  //toggled to 'true' as part of async flow to notify state that file has been
  //sent and is currently uploading (good for launching a loading feature)
  isUploading: false,
  error: false
}

export default function(state= INITIAL_STATE, action){
  switch(action.type){
    case UPLOAD_REQUEST:
      console.log("ding ding ding ", action.payload.data);
      return Object.assign({}, state, {expenses: action.payload.data, isUploading: true, error: false});
    case UPLOAD_SUCCESS:
      console.log('upload success!');
      return Object.assign({}, state, {expenses: action.payload.data, isUploading: false, error: false});
    case UPLOAD_FAILURE:
      return Object.assign({}, state, {expenses: action.payload.data, isUploading: false, error: true});
    default:
      return state;
  }
}
