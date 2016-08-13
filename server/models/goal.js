"use strict"
const db = require('../db.js')

let Goal = db.Bookshelf.Model.extend({
  tableName: 'goals',
  hasTimestamps:true
});

module.exports = Goal;
