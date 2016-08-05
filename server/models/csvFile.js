"use strict"
const Bookshelf = require('../db.js')


let File = Bookshelf.Model.extend({
  tableName: 'statements',
  hasTimestamps:true
});

module.exports = File;
