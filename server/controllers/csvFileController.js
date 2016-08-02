"use strict"
const File = require('../models/csvFile.js');


exports.addFile = (csvTitle, callback) => {
  console.log("File", File);
  new File({csvTitle: csvTitle}).save().then(callback);
};

exports.getFileId = (fileName,callback) => {
  new File().query('where','csvTitle','=',fileName).fetch().then((data) => callback(data.attributes))
};
