import Axios from 'axios'

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_CLICK = 'UPLOAD_CLICK'
export const UPLOAD_SENT = 'UPLOAD_SENT'

/*
ACTION CREATORS FOR UPLOADING A CSV FILE TO SERVER

UX for uploading a CSV file
  1. click on 'upload' button
    -action: UPLOAD_CLICK
    -response from state: show UI for selecting a file
  2. select file from computer and click 'choose'
    -action: UPLOAD_SENT
    -response from state: hide upload UI and show loading feature
  3. CSV is parsed and sent to backend
  4. Expenses are received from server
    -action: RECEIVE_EXPENSES
    -reponse from state: hide loading feature, display updated expenses
*/

//action creator function to notify state that CSV file has been sent to server
export function uploadClick(){
  return {
    type: UPLOAD_CLICK
  }
}

/*
action creator function to notify state that CSV was successfully stored in DB
and newly expenses have been received
*/

function uploadSent(){
  return {
    type: UPLOAD_SENT
  }
}

export function uploadCSV(){
  return function(dispatch){
    dispatch(uploadSent())
  };
}
