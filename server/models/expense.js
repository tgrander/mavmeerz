"use strict"
const Bookshelf = require('../db.js')


let Expense = Bookshelf.Model.extend({
  tableName: 'expenses',
  hasTimestamps:true
});

module.exports = Expense;
