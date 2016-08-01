"use strict"
const express = require('express');
const db = require('./db.js')
const Expense = require('./controllers/csvFileController.js')
const File = require('./controllers/expenseController.js')
const app = express();
const port = process.env.PORT || 8080;

/// for development ///
const morgan = require('morgan');

app.use(morgan('dev'));
///      ////      ///


/// looks for 'index.html' in '/../build' by default ///
app.use(express.static(__dirname + '/../build'));

app.listen(port);

console.log('Zenmo is now listening on port ' + port);
