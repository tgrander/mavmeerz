"use strict"
const File = require('../models/csvFile.js');


exports.addFile = (csvTitle, callback) => {
  return new File({csvTitle: csvTitle}).save();
};

exports.getFileId = (fileName,callback) => {
  new File().query('where','csvTitle','=',fileName).fetch().then((data) => callback(data.attributes))
};
