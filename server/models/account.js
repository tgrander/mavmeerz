"use strict"
const db = require('../db.js')

let Account = db.Bookshelf.Model.extend({
  tableName: 'accounts',
  hasTimestamps:true
});

module.exports = Account;
