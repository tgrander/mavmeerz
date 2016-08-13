"use strict"
const db = require('../db.js')

let subCategory = db.Bookshelf.Model.extend({
  tableName: 'sub_categories',
  hasTimestamps:true
});

module.exports = subCategory;
