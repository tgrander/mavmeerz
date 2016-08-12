"use strict"
const db = require('../db.js')

let Expense = db.Bookshelf.Model.extend({
  tableName: 'expenses',
  hasTimestamps:true
});

module.exports = Expense;
