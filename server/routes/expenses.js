const express = require('express');
const router  = express.Router();
const util    = require('../util/util.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /expenses received!');
  next();
});

// get expenses
router.get('/', (req, res) => {
  // get all expenses from DB and send response
  util.getExpensesFromDB().then(expenses => res.send(expenses));
});

// send expenses, currently expects 'text/csv'
router.post('/', (req, res) => {
  // replace with make-do fn for now using express-csv middleware
  util.parseCSVArr(req.body)
    // add results to dB
    .then(results => util.addExpensesToDB(results))
    // send back expenses array as default response
    .then(success => util.getExpensesFromDB())
    .then(expenses => res.status(201).send(expenses));
});

// bulk update expenses
router.put('/', (req, res) => {
  // utility function to update category for an array of
  // expenses in expenses DB
  let expenses = req.body.expenses;
  util.bulkUpdateExpenseCategoriesinDB(expenses)
    .then(success => util.getExpensesFromDB())
    .then(expenses => res.send(expenses));
});

// update specific expense
router.put('/:id', (req, res) => {
  let expenseId = req.url.slice(1);
  let category  = req.body.category;
  util.updateExpenseCategoryinDB(expenseId, category)
     // send back expenses array as default response
    .then(success => util.getExpensesFromDB())
    .then(expenses => res.send(expenses));
});

module.exports = router;
