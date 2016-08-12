"use strict"
const db = require('../db.js')

let Category = db.Bookshelf.Model.extend({
  tableName: 'categories',
  hasTimestamps:true
});

module.exports = Category;
