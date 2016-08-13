"use strict"
const db = require('../db.js')


let File = db.Bookshelf.Model.extend({
  tableName: 'statements',
  hasTimestamps:true
});

module.exports = File;
