"use strict"
const File = require('../models/csvFile.js')


exports.addFile = (csvTitle, callback) => {
  new File({csvTitle: csvTitle}).save().then(callback);
};

exports.getFileId = (csvTitle,callback) => {
  new File().query('where','csvTitle','=','fileName').fetch().then((data) => data.attributes.id)
};
