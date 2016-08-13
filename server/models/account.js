"use strict"
const db = require('../db.js')

let Account = db.Bookshelf.Model.extend({
  tableName: 'account',
  hasTimestamps:true
});

module.exports = Account;
