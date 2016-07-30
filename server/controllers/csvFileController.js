"use strict"
const File = require('../models/csvFile.js')


exports.addExpense = (csvTitle, callback) => {
  new File({csvTitle: csvTitle}).save().then(callback);
};
