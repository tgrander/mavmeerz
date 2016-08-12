"use strict"
const db = require('../db.js')

let joinCategory = db.Bookshelf.Model.extend({
  tableName: 'join_categories',
  hasTimestamps:true
});

module.exports = joinCategory;
