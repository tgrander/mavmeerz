"use strict"
const File = require('../models/csvFile.js');


exports.addFile = (csvTitle, userId) => {
  // return new File({csvTitle: csvTitle}).save();
  return new Promise((resolve,reject) => {
    new File({csvTitle: csvTitle, userId: userId}).save().then((newFileData) =>{
      resolve(newFileData.attributes.id)
    });
  });
};

/**
  This function will return a promise, which will have the
  file id as the passed data (i.e. getFileId("expenses").then((id)=>console.log(id)))
*/
exports.getFileId = (fileName) => {
  return new Promise((resolve,reject) => {
    new File().fetch({csvTitle: fileName.csvTitle}).then((data) => {
      resolve(data.attributes.id)
    })
  });
  // new File().query('where','csvTitle','=',fileName).fetch().then((data) => callback(data.attributes))
};
