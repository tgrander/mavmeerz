'esversion: 6'
import axios from 'axios'

/*
* action types
*/
// export const UPLOAD_CLICK = 'UPLOAD_CLICK';
export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';

/*
ACTION CREATORS FOR UPLOADING A CSV FILE TO SERVER

UX for uploading a CSV file
  1. click on 'upload' button
    -action: UPLOAD_CLICK
    -response from state: show UI for selecting a file
  2. select file from computer and click 'choose'
    -action: 'RECEIVE_CSV'
    -response from state: hide upload UI and show loading feature
  3. CSV is parsed and sent to backend
  4. Expenses are received from server
    -action: RECEIVE_EXPENSES
    -reponse from state: hide loading feature, display updated expenses
*/

//action creator function to notify state that CSV file has been sent to server
//do I need this?
export function uploadRequest(){
  console.log('upload request clicked in uploadActions')
  return {
    type: UPLOAD_REQUEST,
  };
}

/*
action creator function to notify state that CSV was successfully stored in DB
and newly expenses have been received
*/
//do I need this?
export function uploadSuccess(csv) {
  console.log('uploadSuccess');
  return {
    type: UPLOAD_SUCCESS,
    // payload: request
  };
}

export function uploadFailure(csv) {
  console.log('uploadFail!');
  return {
    type: UPLOAD_FAILURE ,
    // payload: request
  };
}
/*
* uses axios to make asyn call to send the csv file to the backend where it will get parsed
*/
export function fetchCSV(csv){
  // return function(dispatch){
  //   dispatch(uploadRequest());
    return axios({
      method: 'POST',
      url: '/v1/api/expenses',
      data: csv
      // headers: {'Content-Type': 'text/csv'}
    })
      .then (response => console.log('response in fetchCSV actions', response))
        // dispatch(uploadSent(response));
      .catch(error => console.log(error));
        // dispatch(response);
  // };
}
