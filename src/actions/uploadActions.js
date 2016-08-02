import axios from 'axios'

// export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_CLICK = 'UPLOAD_CLICK';
export const UPLOAD_SENT = 'UPLOAD_SENT';
export const UPLOAD_CSV = 'UPLOAD_CSV';

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
  console.log('upload clicked in uploadActions')
  return {
    type: UPLOAD_CLICK
    payload: request
  };
}

/*
action creator function to notify state that CSV was successfully stored in DB
and newly expenses have been received
*/

export function uploadSent(csv){
  console.log('uploadSent');
  return {
    type: UPLOAD_SENT,
    data: 'text/csv',
    payload: request
  };
}

export function uploadCSV(csv){
  // return function(dispatch){
  //   dispatch(uploadClick());
  console.log('uploadCSV');
    return axios({
      method: 'POST',
      url: '/v1/api/expenses',
      data: 'text/csv',
      csv: csv
    })
      .then(function(response) {
        console.log(response);
        // dispatch(uploadSent(response));
      })
      .catch(function(error) {
        console.log(error);
        // dispatch(response);
      });
  // };
}
